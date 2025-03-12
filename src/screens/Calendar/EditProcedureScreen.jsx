import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Text, Switch, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch } from 'react-redux';
import { updateProcedureInDiary } from '../../store/slices/healthDiarySlice';
import CustomInput from '../../components/CustomInput';
import AddPhotoHeader from '../../components/Pets/AddPhotoHeader';

export default function EditProcedureScreen({ route, navigation }) {
    const { diaryId, procedureIndex, procedure } = route.params;
    const dispatch = useDispatch();

    const [type, setType] = useState(procedure.type || '');
    const [medicationName, setMedicationName] = useState(procedure.medicationName || '');
    const [dateTime, setDateTime] = useState(procedure.dateTime || '');
    const [description, setDescription] = useState(procedure.description || '');
    const [repetition, setRepetition] = useState(procedure.repetition || '');
    const [period, setPeriod] = useState(procedure.period || '');
    const [notification, setNotification] = useState(procedure.notification || false);

    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [isPeriodPickerVisible, setPeriodPickerVisible] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleDateConfirm = (date) => {
        setDateTime(date.toLocaleString());
        hideDatePicker();
    };

    const showPeriodPicker = () => {
        setPeriodPickerVisible(true);
    };

    const hidePeriodPicker = () => {
        setPeriodPickerVisible(false);
    };

    const handlePeriodConfirm = (date) => {
        setPeriod(date.toLocaleString());
        hidePeriodPicker();
    };

    const toggleNotification = () => {
        setNotification(prev => !prev);
    };

    const handleSave = () => {
        const updatedProcedure = {
            type,
            medicationName,
            dateTime,
            description,
            repetition,
            period,
            notification,
        };
        dispatch(updateProcedureInDiary({ diaryId, procedureIndex, updatedProcedure }));
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <AddPhotoHeader
                title="Edit Procedure"
                onBackPress={() => navigation.goBack()}
                onDonePress={handleSave}
                doneButtonActive={true}
            />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <CustomInput
                    placeholder="Type of Procedure"
                    value={type}
                    onChangeText={setType}
                    style={styles.input}
                />
                <CustomInput
                    placeholder="Medication Name"
                    value={medicationName}
                    onChangeText={setMedicationName}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.input} onPress={showDatePicker}>
                    <Text style={styles.dateText}>{dateTime || 'Date and Time'}</Text>
                </TouchableOpacity>
                <CustomInput
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                    style={[styles.input, { height: 100 }]}
                    multiline
                />
                <CustomInput
                    placeholder="Repetition"
                    value={repetition}
                    onChangeText={setRepetition}
                    style={[styles.input, { height: 80 }]}
                    multiline
                />
                <View style={styles.notificationContainer}>
                    <Text style={styles.notificationText}>Notification</Text>
                    <Switch value={notification} onValueChange={toggleNotification} />
                </View>
                <View style={styles.periodRow}>
                    <Text style={styles.periodText}>{period || 'Period'}</Text>
                    <TouchableOpacity onPress={showPeriodPicker}>
                        <Text style={styles.chooseText}>Choose</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
                isDarkModeEnabled={true}
            />
            <DateTimePickerModal
                isVisible={isPeriodPickerVisible}
                mode="datetime"
                onConfirm={handlePeriodConfirm}
                onCancel={hidePeriodPicker}
                isDarkModeEnabled={true}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26284D',
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 30,
    },
    input: {
        backgroundColor: '#434583',
        borderRadius: 15,
        paddingHorizontal: 16,
        justifyContent: 'center',
        height: 47,
        marginBottom: 10,
    },
    dateText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.5)',
    },
    notificationContainer: {
        height: 47,
        backgroundColor: '#434583',
        borderRadius: 15,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    notificationText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 17,
        color: '#FFFFFF',
    },
    periodRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    periodText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '700',
        fontSize: 14,
        color: '#FFFFFF',
    },
    chooseText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '700',
        fontSize: 16,
        color: '#6C6FCB',
    },
});
