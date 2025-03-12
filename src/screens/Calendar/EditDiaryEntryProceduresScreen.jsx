import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Image, Text, Switch, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch } from 'react-redux';
import { updateDiaryEntry } from '../../store/slices/healthDiarySlice';
import AddPhotoHeader from '../../components/Pets/AddPhotoHeader';
import CustomInput from '../../components/CustomInput';
import PlusSVG from '../../assets/paw/PlusSVG';

export default function EditDiaryEntryProceduresScreen({ route, navigation }) {
    const { diary } = route.params;
    const dispatch = useDispatch();

    const [procedures, setProcedures] = useState(diary.procedures.map(p => ({
        type: p.type || '',
        medication: p.medicationName || '',
        dateTime: p.dateTime || '',
        description: p.description || '',
        repetition: p.repetition || '',
        notification: p.notification || false,
        period: p.period || '',
    })));

    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [selectedProcedureIndex, setSelectedProcedureIndex] = useState(null);
    const [isPeriodPickerVisible, setPeriodPickerVisible] = useState(false);
    const [selectedPeriodProcedureIndex, setSelectedPeriodProcedureIndex] = useState(null);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleDonePress = () => {
        const updatedDiaryEntry = {
            ...diary,
            procedures: procedures
                .filter(p =>
                    p.type.trim() ||
                    p.medication.trim() ||
                    p.dateTime.trim() ||
                    p.description.trim() ||
                    p.repetition.trim() ||
                    p.period.trim()
                )
                .map(p => ({
                    type: p.type,
                    medicationName: p.medication,
                    dateTime: p.dateTime,
                    description: p.description,
                    repetition: p.repetition,
                    period: p.period,
                    notification: p.notification,
                })),
        };

        dispatch(updateDiaryEntry({ id: diary.id, updatedDiary: updatedDiaryEntry }));
        navigation.goBack();
    };

    const showDatePicker = index => {
        setSelectedProcedureIndex(index);
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleDateConfirm = date => {
        setProcedures(prev => {
            const updated = [...prev];
            updated[selectedProcedureIndex].dateTime = date.toLocaleString();
            return updated;
        });
        hideDatePicker();
    };

    const showPeriodPicker = index => {
        setSelectedPeriodProcedureIndex(index);
        setPeriodPickerVisible(true);
    };

    const hidePeriodPicker = () => {
        setPeriodPickerVisible(false);
    };

    const handlePeriodConfirm = date => {
        setProcedures(prev => {
            const updated = [...prev];
            updated[selectedPeriodProcedureIndex].period = date.toLocaleString();
            return updated;
        });
        hidePeriodPicker();
    };

    const handleInputChange = (index, field, value) => {
        setProcedures(prev => {
            const updated = [...prev];
            updated[index][field] = value;
            return updated;
        });
    };

    const toggleNotification = index => {
        setProcedures(prev => {
            const updated = [...prev];
            updated[index].notification = !updated[index].notification;
            return updated;
        });
    };

    const handleAddProcedure = () => {
        setProcedures(prev => [
            ...prev,
            {
                type: '',
                medication: '',
                dateTime: '',
                description: '',
                repetition: '',
                notification: false,
                period: '',
            },
        ]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <AddPhotoHeader
                title="Edit Procedures"
                onBackPress={handleBackPress}
                onDonePress={handleDonePress}
                doneButtonActive={true}
            />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={{ marginHorizontal: 20, marginTop: 28 }}>
                    <Image
                        source={require('../../assets/calendar/animals.png')}
                        style={{ alignSelf: 'center', marginBottom: 5 }}
                    />
                    {procedures.map((procedure, index) => (
                        <View key={index} style={styles.procedureContainer}>
                            <CustomInput
                                placeholder="Type of Procedure"
                                value={procedure.type}
                                onChangeText={text => handleInputChange(index, 'type', text)}
                                style={[styles.inputBase, { marginBottom: 6, height: 47 }]}
                            />
                            <CustomInput
                                placeholder="Medication Name"
                                value={procedure.medication}
                                onChangeText={text => handleInputChange(index, 'medication', text)}
                                style={[styles.inputBase, { marginBottom: 6, height: 47 }]}
                            />
                            <TouchableOpacity
                                style={[styles.inputBase, styles.dateTimeInput]}
                                onPress={() => showDatePicker(index)}
                            >
                                <Text style={[styles.dateTimeText, procedure.dateTime ? { color: '#FFFFFF' } : {}]}>
                                    {procedure.dateTime || 'Date and Time'}
                                </Text>
                            </TouchableOpacity>
                            <CustomInput
                                placeholder="Description"
                                value={procedure.description}
                                onChangeText={text => handleInputChange(index, 'description', text)}
                                style={[styles.inputBase, { marginBottom: 6, height: 93 }]}
                                multiline
                            />
                            <CustomInput
                                placeholder="Repetition"
                                value={procedure.repetition}
                                onChangeText={text => handleInputChange(index, 'repetition', text)}
                                style={[styles.inputBase, { marginBottom: 6, height: 82 }]}
                                multiline
                            />
                            <View style={[styles.notificationContainer, { marginBottom: 5 }]}>
                                <Text style={styles.notificationText}>Notification</Text>
                                <Switch value={procedure.notification} onValueChange={() => toggleNotification(index)} />
                            </View>
                            <Text style={styles.remindText}>When to remind?</Text>
                            <View style={styles.periodRow}>
                                {procedure.period ? (
                                    <Text style={styles.periodLabel}>{procedure.period}</Text>
                                ) : (
                                    <Text style={styles.periodLabel}>Period</Text>
                                )}
                                <TouchableOpacity onPress={() => showPeriodPicker(index)}>
                                    <Text style={styles.chooseText}>Choose</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                    <TouchableOpacity style={[styles.plusButton, styles.plusButtonData]} onPress={handleAddProcedure}>
                        <PlusSVG width={20} height={20} />
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
        paddingBottom: 30,
    },
    procedureContainer: {
        backgroundColor: '#303263',
        borderRadius: 20,
        paddingVertical: 14,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    inputBase: {
        backgroundColor: '#434583',
        borderRadius: 15,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    dateTimeInput: {
        marginBottom: 6,
        height: 47,
    },
    dateTimeText: {
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
    },
    notificationText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 17,
        color: '#FFFFFF',
    },
    remindText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 11,
        color: '#FFFFFF',
        marginTop: 5,
        marginBottom: 10,
    },
    periodRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    periodLabel: {
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
    plusButton: {
        width: 46,
        height: 46,
        borderRadius: 164,
        backgroundColor: '#6C6FCB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusButtonData: {
        alignSelf:'flex-end',
        marginTop: 10,
    },
});
