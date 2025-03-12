import React, { useState, useMemo } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import AddPhotoHeader from '../../components/Pets/AddPhotoHeader';
import CustomInput from '../../components/CustomInput';
import { selectPetById, updatePetGrowthHistory } from '../../store/slices/petsSlice';

export default function GrowthHistoryScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();

    const { petId } = route.params;
    const pet = useSelector((state) => selectPetById(state, petId));

    const isNewEntry = route.params?.editSingleField;
    const lastEntry = pet?.growthHistory?.[pet.growthHistory.length - 1];
    const [date, setDate] = useState(isNewEntry ? '' : lastEntry?.date || '');
    const [height, setHeight] = useState(isNewEntry ? '' : lastEntry?.measurement || '');

    const allFieldsFilled = useMemo(() => {
        return date.trim() && height.trim();
    }, [date, height]);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleDonePress = () => {
        dispatch(
            updatePetGrowthHistory({
                petId,
                newGrowthHistory: {
                    date,
                    measurement: height,
                    note: '',
                },
                editSingleField: isNewEntry,
            })
        );
        if (route.params?.editSingleField) {
            navigation.goBack();
        } else {
            navigation.replace('Behavior', { petId });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <AddPhotoHeader
                title="Growth History"
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
                        source={require('../../assets/paw/animals3.png')}
                        style={styles.topImage}
                        resizeMode="contain"
                    />
                    <CustomInput
                        placeholder="Date (e.g. 20.05.2025)"
                        value={date}
                        onChangeText={setDate}
                    />
                    <CustomInput
                        placeholder="Height (cm)"
                        value={height}
                        onChangeText={setHeight}
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
});
