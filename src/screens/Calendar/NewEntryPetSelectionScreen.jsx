import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { selectPets } from '../../store/slices/petsSlice';

import AddPhotoHeader from '../../components/Pets/AddPhotoHeader';

import RadioDisableSVG from '../../assets/calendar/RadioDisableSVG';
import RadioActiveSVG from '../../assets/calendar/RadioActiveSVG';

export default function NewEntryPetSelectionScreen({ navigation }) {
    const pets = useSelector(selectPets);
    const [selectedPetId, setSelectedPetId] = useState(null);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleDonePress = () => {
        if (selectedPetId) {
            navigation.navigate('NewEntryDetails', { petId: selectedPetId });
        }
    };

    const doneButtonActive = !!selectedPetId;

    const renderPetItem = ({ item }) => {
        const isSelected = item.id === selectedPetId;

        return (
            <TouchableOpacity style={styles.petItem} onPress={() => setSelectedPetId(item.id)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={{ uri: item.image }} style={styles.petImage} />
                    <Text style={styles.petName}>{item.name}</Text>
                </View>
                {isSelected ? <RadioActiveSVG /> : <RadioDisableSVG />}
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <AddPhotoHeader
                title="New Entry"
                onBackPress={handleBackPress}
                onDonePress={handleDonePress}
                doneButtonActive={doneButtonActive}
            />

            <View style={{ marginHorizontal: 20, marginTop: 28 }}>
                <Image
                    source={require('../../assets/calendar/animals.png')}
                    style={{ alignSelf: 'center', marginBottom: 5 }}
                />

                <Text style={styles.choosePetText}>Choose a pet</Text>

                <FlatList
                    data={pets}
                    keyExtractor={(item) => item.id}
                    renderItem={renderPetItem}
                    ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26284D',
    },
    choosePetText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 10,
    },
    petItem: {
        height: 104,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 15,
        backgroundColor: '#303263',
        padding: 14,
    },
    petImage: {
        width: 76,
        height: 76,
        borderRadius: 375,
        marginRight: 9,
    },
    petName: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 18,
        color: '#FFFFFF',
    },
});
