import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import AddPhotoHeader from '../../components/Pets/AddPhotoHeader';
import CustomInput from '../../components/CustomInput';
import {
    addWeightAndActivityMonitoring,
    updateWeightAndActivityMonitoring,
} from '../../store/slices/petCareSlice';
import { parseWeighingDate } from '../../helpers/dateHelpers';

export default function AddWeightActivitySecondScreen({ route }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const { petId, weightRecord, isEdit } = route.params;

    const [petWeight, setPetWeight] = useState(
        isEdit && weightRecord ? weightRecord.petWeight.replace(' kg', '') : ''
    );
    const [activityHours, setActivityHours] = useState(
        isEdit && weightRecord ? weightRecord.totalActivity.replace(' hours', '') : ''
    );
    const [note, setNote] = useState(isEdit && weightRecord ? weightRecord.note : '');

    const initialDate =
        isEdit && weightRecord && weightRecord.weighingDate
            ? parseWeighingDate(weightRecord.weighingDate)
            : new Date();
    const [date, setDate] = useState(initialDate);

    const handleDateChange = (_, selectedDate) => {
        if (selectedDate) setDate(selectedDate);
    };

    const handleDonePress = () => {
        if (!petWeight || !activityHours) return;

        const payload = {
            petId,
            petWeight: `${petWeight} kg`,
            weighingDate: date.toLocaleDateString(),
            totalActivity: `${activityHours} hours`,
            note,
        };

        if (isEdit) {
            payload.id = weightRecord.id;
            dispatch(updateWeightAndActivityMonitoring(payload));
        } else {
            dispatch(addWeightAndActivityMonitoring(payload));
        }
        navigation.goBack();
    };

    const isDoneActive = petWeight.trim() !== '' && activityHours.trim() !== '';

    return (
        <SafeAreaView style={styles.container}>
            <AddPhotoHeader
                title="Weight and activity monitoring"
                onBackPress={() => navigation.goBack()}
                onDonePress={handleDonePress}
                doneButtonActive={isDoneActive}
            />

            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}>
                <View style={{ height: 28 }} />

                <Image source={require('../../assets/activity/animals2.png')} style={styles.image} />

                <CustomInput
                    placeholder="Pet weight (kg)"
                    value={petWeight}
                    onChangeText={setPetWeight}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Weighing date</Text>

                <View style={styles.datePickerContainer}>
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={handleDateChange}
                        style={styles.inlinePicker}
                        textColor="#FFF"
                    />
                </View>

                <CustomInput
                    placeholder="Total activity for the week (hours)"
                    value={activityHours}
                    onChangeText={setActivityHours}
                    keyboardType="numeric"
                />

                <CustomInput
                    placeholder="Note"
                    value={note}
                    onChangeText={setNote}
                    multiline
                    style={styles.noteInput}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26284D',
    },
    image: {
        alignSelf: 'center',
        marginBottom: 16,
    },
    label: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 8,
    },
    datePickerContainer: {
        borderRadius: 15,
        backgroundColor: '#303263',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 6,
        overflow: 'hidden',
        marginBottom: 8,
    },
    inlinePicker: {
        width: '100%',
        height: 50,
    },
    noteInput: {
        height: 109,
    },
});
