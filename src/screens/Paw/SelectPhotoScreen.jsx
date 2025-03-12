import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { usePickImage } from '../../hooks/usePickImage';
import AddPhotoHeader from '../../components/Pets/AddPhotoHeader';
import BigPhotoSVG from '../../assets/paw/BigPhotoSVG';
import { addPet } from '../../store/slices/petsSlice';

export default function SelectPhotoScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const { pickImage } = usePickImage();
    const { name, breed, age, petHeight, weight, note } = route.params;
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleSelectPhoto = async () => {
        const uri = await pickImage();
        if (uri) {
            setSelectedPhoto(uri);
        }
    };

    const handleDonePress = () => {
        const newPet = {
            id: Date.now().toString(),
            name,
            breed,
            age,
            height: petHeight,
            weight,
            note,
            image: selectedPhoto,
            photoGallery: [],
            growthHistory: [],
            behavior: [],
        };
        dispatch(addPet(newPet));
        navigation.navigate('Paw');
    };

    const doneButtonActive = !!selectedPhoto;

    return (
        <SafeAreaView style={styles.container}>
            <AddPhotoHeader
                title="Add a pet"
                onBackPress={handleBackPress}
                onDonePress={handleDonePress}
                doneButtonActive={doneButtonActive}
            />
            <View style={styles.contentContainer}>
                <Text style={styles.selectText}>Select a photo</Text>
                <TouchableOpacity style={styles.photoContainer} onPress={handleSelectPhoto}>
                    {selectedPhoto && (
                        <Image source={{ uri: selectedPhoto }} style={styles.selectedImage} />
                    )}
                    <View style={styles.overlayIconContainer}>
                        <BigPhotoSVG style={{ opacity: selectedPhoto ? 0.5 : 1 }} />
                    </View>
                </TouchableOpacity>
            </View>
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
        alignItems: 'center',
    },
    selectText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 28,
    },
    photoContainer: {
        width: 255,
        height: 255,
        borderRadius: 375,
        backgroundColor: '#303263',
        padding: 72,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedImage: {
        width: 255,
        height: 255,
        borderRadius: 375,
        resizeMode: 'cover',
    },
    overlayIconContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
