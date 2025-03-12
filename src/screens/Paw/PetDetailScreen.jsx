import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import Section from '../../components/Pets/Section';
import PetsHeader from '../../components/Pets/PetsHeader';
import PetIconBlock from '../../components/Pets/PetIconBlock';
import InfoBlock from '../../components/Pets/InfoBlock';
import { selectPetById, deletePet } from '../../store/slices/petsSlice';
import DeleteModal from '../../components/DeleteModal';

export default function PetDetailScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();

    const { petId } = route.params;
    const pet = useSelector((state) => selectPetById(state, petId));

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleBackPress = () => navigation.goBack();

    const handleEditPress = () => {
        navigation.navigate('AddPhoto', { petId: pet.id, fromEdit: true });
    };

    const handleDeletePress = () => setShowDeleteModal(true);
    const handleConfirmDelete = () => {
        dispatch(deletePet(pet.id));
        setShowDeleteModal(false);
        navigation.goBack();
    };
    const handleCancelDelete = () => setShowDeleteModal(false);

    const handleAddPhotoPress = () => {
        navigation.navigate('AddPhoto', { petId: pet.id, pet });
    };
    const handleAddGrowthHistory = () => {
        navigation.navigate('GrowthHistory', { petId: pet.id, editSingleField: true });
    };
    const handleAddBehaviorPress = () => {
        navigation.navigate('Behavior', { petId: pet.id, editSingleField: true });
    };

    if (!pet) {
        return (
            <SafeAreaView style={styles.safeContainer}>
                <PetsHeader
                    onBackPress={handleBackPress}
                    onEditPress={handleEditPress}
                    onDeletePress={handleDeletePress}
                />
                <View style={styles.scrollContainer}>
                    <Text style={{ color: '#fff' }}>Pet not found</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeContainer}>
            <PetsHeader
                onBackPress={handleBackPress}
                onEditPress={handleEditPress}
                onDeletePress={handleDeletePress}
            />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <PetIconBlock image={pet.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.petName}>{pet.name}</Text>
                    <InfoBlock label="Breed" value={pet.breed} />
                    <InfoBlock label="Age" value={pet.age} />
                    <InfoBlock label="Height" value={pet.height} />
                    <InfoBlock label="Weight" value={pet.weight} />
                    <InfoBlock label="Note" value={pet.note} />
                </View>

                <Section
                    title="Photo Gallery"
                    photos={pet.photoGallery}
                    onPress={handleAddPhotoPress}
                />
                <Section
                    title="Growth History"
                    growthHistory={pet.growthHistory}
                    onPress={handleAddGrowthHistory}
                />
                <Section
                    title="Behavior"
                    behavior={pet.behavior}
                    onPress={handleAddBehaviorPress}
                />
            </ScrollView>

            <DeleteModal
                visible={showDeleteModal}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#26284D',
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingTop: 26,
        paddingBottom: 66,
    },
    infoContainer: {
        marginBottom: 24,
    },
    petName: {
        fontFamily: 'SF Pro Text',
        fontWeight: '800',
        fontSize: 25,
        color: '#FFFFFF',
        marginBottom: 20,
    },
});
