import React, { useState, useMemo } from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AddPhotoHeader from '../../components/Pets/AddPhotoHeader';
import CustomInput from '../../components/CustomInput';

export default function AddPetScreen() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [petHeight, setPetHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [note, setNote] = useState('');

    const allFieldsFilled = useMemo(() => {
        return name && breed && age && petHeight && weight && note;
    }, [name, breed, age, petHeight, weight, note]);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleDonePress = () => {
        navigation.navigate('SelectPhoto', {
            name,
            breed,
            age,
            petHeight,
            weight,
            note,
        });
        setName('');
        setBreed('');
        setAge('');
        setPetHeight('');
        setWeight('');
        setNote('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <AddPhotoHeader
                title="Add a pet"
                onBackPress={handleBackPress}
                onDonePress={handleDonePress}
                doneButtonActive={allFieldsFilled}
            />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Image
                        source={require('../../assets/paw/animals2.png')}
                        style={styles.topImage}
                        resizeMode="contain"
                    />
                    <CustomInput
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                    />
                    <CustomInput
                        placeholder="Breed"
                        value={breed}
                        onChangeText={setBreed}
                    />
                    <CustomInput
                        placeholder="Age"
                        value={age}
                        onChangeText={setAge}
                    />
                    <CustomInput
                        placeholder="Height (cm)"
                        value={petHeight}
                        onChangeText={setPetHeight}
                    />
                    <CustomInput
                        placeholder="Weight (kg)"
                        value={weight}
                        onChangeText={setWeight}
                    />
                    <CustomInput
                        placeholder="Note"
                        value={note}
                        onChangeText={setNote}
                        multiline
                        style={styles.noteInput}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26284D',
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingTop: 28,
    },
    topImage: {
        width: '100%',
        height: 150,
        marginBottom: 16,
    },
    noteInput: {
        height: 109,
        textAlignVertical: 'top',
    },
});
