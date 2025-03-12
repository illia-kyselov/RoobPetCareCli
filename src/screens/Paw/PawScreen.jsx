import React from 'react';
import { View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import PetCard from '../../components/Pets/PetCard';
import FloatingButton from '../../components/FloatingButton';
import Header from '../../components/Header';
import DontHaveMessage from '../../components/DontHaveMessage';
import { selectPets } from '../../store/slices/petsSlice';

export default function PawScreen() {
    const navigation = useNavigation();
    const pets = useSelector(selectPets);

    const handleCardPress = (pet) => {
        navigation.navigate('PetDetail', { petId: pet.id });
    };

    const renderPetCard = ({ item }) => (
        <PetCard item={item} onPress={() => handleCardPress(item)} />
    );

    const renderContent = () => {
        if (pets && pets.length > 0) {
            return (
                <View style={styles.pawContainer}>
                    <FlatList
                        data={pets}
                        renderItem={renderPetCard}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            );
        } else {
            return (
                <View style={{ marginTop: 42 }}>
                    <DontHaveMessage />
                </View>
            );
        }
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <Header title="Pets" />
            {renderContent()}
            <FloatingButton onPress={() => navigation.navigate('AddPet')} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#26284D',
    },
    pawContainer: {
        flex: 1,
        backgroundColor: '#26284D',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
});
