import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import AddPhotoHeader from '../../components/Pets/AddPhotoHeader';
import CustomInput from '../../components/CustomInput';
import { selectPetById } from '../../store/slices/petsSlice';

export default function NewEntryDetailsScreen({ route, navigation }) {
    const { petId } = route.params;
    const pet = useSelector((state) => selectPetById(state, petId));

    const [dateOfVisit, setDateOfVisit] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [weight, setWeight] = useState('');
    const [reason, setReason] = useState('');
    const [temperature, setTemperature] = useState('');
    const [diagnosticResults, setDiagnosticResults] = useState('');

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

        const newDiaryData = {
            petId,
            petName: pet?.name,
            petImage: pet?.image,
            dateTime: dateOfVisit,
            doctorName,
            weight,
            reason,
            temperature,
            diagnosticResults,
        };

        navigation.navigate('NewEntryProcedures', { newDiaryData });
    };

    return (
        <SafeAreaView style={styles.container}>
            <AddPhotoHeader
                title="New Entry"
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
