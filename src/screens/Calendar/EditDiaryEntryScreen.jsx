import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import AddPhotoHeader from '../../components/Pets/AddPhotoHeader';
import CustomInput from '../../components/CustomInput';
import { updateDiaryEntry } from '../../store/slices/healthDiarySlice';

export default function EditDiaryEntryScreen({ route, navigation }) {
    const { diary } = route.params;
    const dispatch = useDispatch();

    const [dateOfVisit, setDateOfVisit] = useState(diary.dateTime || '');
    const [doctorName, setDoctorName] = useState(diary.doctorName || '');
    const [weight, setWeight] = useState(diary.weight || '');
    const [reason, setReason] = useState(diary.reason || '');
    const [temperature, setTemperature] = useState(diary.temperature || '');
    const [diagnosticResults, setDiagnosticResults] = useState(diary.diagnosticResults || '');

    const allFieldsFilled =
        dateOfVisit.trim() &&
        doctorName.trim() &&
        weight.trim() &&
        reason.trim() &&
        temperature.trim() &&
        diagnosticResults.trim();

    const doneButtonActive = Boolean(allFieldsFilled);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleDonePress = () => {
        if (!doneButtonActive) return;

        const updatedDiaryData = {
            dateTime: dateOfVisit,
            doctorName,
            weight,
            reason,
            temperature,
            diagnosticResults,
        };

        dispatch(updateDiaryEntry({ id: diary.id, updatedDiary: updatedDiaryData }));
        navigation.replace('EditDiaryEntryProcedures', { diary: { ...diary, ...updatedDiaryData } });
    };

    return (
        <SafeAreaView style={styles.container}>
            <AddPhotoHeader
                title="Edit Entry"
                onBackPress={handleBackPress}
                onDonePress={handleDonePress}
                doneButtonActive={doneButtonActive}
            />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.innerContainer}>
                    <Image
                        source={require('../../assets/calendar/animals.png')}
                        style={{ alignSelf: 'center', marginBottom: 5 }}
                    />
                    <CustomInput
                        placeholder="Date of visit"
                        value={dateOfVisit}
                        onChangeText={setDateOfVisit}
                        style={{ marginBottom: 5 }}
                    />
                    <CustomInput
                        placeholder="Doctor's name"
                        value={doctorName}
                        onChangeText={setDoctorName}
                        style={{ marginBottom: 5 }}
                    />
                    <CustomInput
                        placeholder="Weight at the time of visit"
                        value={weight}
                        onChangeText={setWeight}
                        style={{ marginBottom: 5 }}
                    />
                    <CustomInput
                        placeholder="Reason for visit"
                        value={reason}
                        onChangeText={setReason}
                        style={{ marginBottom: 5 }}
                    />
                    <CustomInput
                        placeholder="Body temperature (°F)"
                        value={temperature}
                        onChangeText={setTemperature}
                        style={{ marginBottom: 5 }}
                    />
                    <CustomInput
                        placeholder="Diagnostic Results"
                        value={diagnosticResults}
                        onChangeText={setDiagnosticResults}
                        multiline
                        style={{ height: 109 }}
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
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 28,
        paddingBottom: 30,
    },
    innerContainer: {},
});
