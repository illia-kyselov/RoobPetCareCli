import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AddPhotoHeader from '../../components/Pets/AddPhotoHeader';
import CustomInput from '../../components/CustomInput';
import animalsImg from '../../assets/activity/animals.png';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    addRecordingPhysicalActivities,
    updateRecordingPhysicalActivities,
} from '../../store/slices/petCareSlice';
import { selectPetById } from '../../store/slices/petsSlice';

function parseDate(dateStr) {
    if (!dateStr) return new Date();
    const parts = dateStr.split('.');
    if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
    return new Date();
}

function parseTime(timeStr) {
    if (!timeStr) return new Date();
    const parts = timeStr.split(':');
    if (parts.length === 2) {
        const hours = parseInt(parts[0], 10);
        const minutes = parseInt(parts[1], 10);
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
    }
    return new Date();
}

export default function AddRecordingActivitySecondScreen({ navigation, route }) {
    const dispatch = useDispatch();
    const { petId, recordingActivity, isEdit } = route.params;
    const pet = useSelector(state => selectPetById(state, petId));

    const activityOptions = ['Training', 'Game', 'Walk'];

    const [selectedActivity, setSelectedActivity] = useState(
        recordingActivity ? recordingActivity.typeOfActivity : 'Training'
    );
    const [duration, setDuration] = useState(
        recordingActivity ? recordingActivity.duration.replace(' min', '') : ''
    );
    const [activityDate, setActivityDate] = useState(
        recordingActivity ? parseDate(recordingActivity.dateOfActivity) : new Date()
    );
    const [activityTime, setActivityTime] = useState(
        recordingActivity ? parseTime(recordingActivity.activityTime) : new Date()
    );

    const handleBackPress = () => {
        navigation.replace('RecordingPhysicalActivities');
    };

    const handleDonePress = () => {
        const payload = {
            petId: petId,
            petName: pet ? pet.name : 'Unknown Pet',
            typeOfActivity: selectedActivity,
            duration: duration + ' min',
            dateOfActivity: activityDate.toLocaleDateString(),
            activityTime: activityTime.toLocaleTimeString(),
        };

        if (isEdit && recordingActivity) {
            dispatch(updateRecordingPhysicalActivities({ id: recordingActivity.id, ...payload }));
        } else {
            dispatch(addRecordingPhysicalActivities(payload));
        }
        navigation.replace('RecordingPhysicalActivities');
    };

    const doneButtonActive = !!selectedActivity && !!duration;

    return (
        <SafeAreaView style={styles.container}>
            <AddPhotoHeader
                title={isEdit ? "Edit Recording Activity" : "Recording physical activities"}
                onBackPress={handleBackPress}
                onDonePress={handleDonePress}
                doneButtonActive={doneButtonActive}
            />
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}>
                <View style={{ height: 28 }} />

                <Image source={animalsImg} style={styles.animalsImage} />

                <Text style={styles.label}>Type of activity</Text>
                <View style={styles.activityList}>
                    {activityOptions.map((activity, idx) => {
                        const isLast = idx === activityOptions.length - 1;
                        return (
                            <TouchableOpacity
                                key={activity}
                                style={[
                                    styles.activityItem,
                                    selectedActivity === activity && styles.activityItemActive,
                                    { marginBottom: isLast ? 16 : 6 },
                                ]}
                                onPress={() => setSelectedActivity(activity)}
                            >
                                <Text style={styles.activityItemText}>{activity}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <CustomInput
                    placeholder="Duration of activity (min)"
                    value={duration}
                    onChangeText={setDuration}
                    style={{ marginBottom: 24 }}
                />

                <Text style={styles.label}>Date of activity</Text>
                <View style={styles.datePickerContainer}>
                    <DateTimePicker
                        value={activityDate}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={(event, date) => {
                            if (date) setActivityDate(date);
                        }}
                        style={styles.inlinePicker}
                        textColor="#FFF"
                    />
                </View>

                <Text style={[styles.label, { marginTop: 24 }]}>Activity time</Text>
                <View style={styles.timePickerContainer}>
                    <DateTimePicker
                        value={activityTime}
                        mode="time"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={(event, time) => {
                            if (time) setActivityTime(time);
                        }}
                        style={styles.inlinePicker}
                        textColor="#FFF"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26284D',
    },
    animalsImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    label: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 10,
    },
    activityList: {},
    activityItem: {
        height: 47,
        borderRadius: 15,
        backgroundColor: '#303263',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityItemActive: {
        backgroundColor: '#6C6FCB',
    },
    activityItemText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
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
    },
    timePickerContainer: {
        height: 178,
        borderRadius: 15,
        backgroundColor: '#303263',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 6,
        overflow: 'hidden',
        marginBottom: 20,
    },
    inlinePicker: {
        width: '100%',
        height: '100%',
    },
});
