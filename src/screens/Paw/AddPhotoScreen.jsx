import React, { useEffect, useState } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    SafeAreaView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectPetById, updatePetPhotoGallery } from '../../store/slices/petsSlice';
import AddPhotoHeader from '../../components/Pets/AddPhotoHeader';
import PhotoSVG from '../../assets/paw/PhotoSVG';
import GreyPlusSVG from '../../assets/paw/GreyPlusSVG';
import { usePickImage } from '../../hooks/usePickImage';

export default function AddPhotoScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const { pickImage } = usePickImage();

    const { petId, fromEdit } = route.params;

    const petFromStore = useSelector((state) => selectPetById(state, petId)) || [];
    const [photos, setPhotos] = useState([null, null, null]);
    const [hasChanged, setHasChanged] = useState(false);

    useEffect(() => {
        if (petFromStore?.photoGallery?.length) {
            const initialPhotos = [null, null, null];
            petFromStore.photoGallery.forEach((photo, index) => {
                if (index < 3) {
                    initialPhotos[index] = photo;
                }
            });
            setPhotos(initialPhotos);
        }
    }, [petFromStore?.photoGallery]);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleDonePress = () => {
        if (hasChanged) {
            dispatch(
                updatePetPhotoGallery({
                    petId,
                    photoGallery: photos.filter(Boolean),
                })
            );
        }
        setPhotos([null, null, null]);
        setHasChanged(false);

        if (fromEdit) {
            navigation.replace('GrowthHistory', { petId });
        } else {
            navigation.goBack();
        }
    };

    const handlePickImage = async (index) => {
        const uri = await pickImage();
        if (uri) {
            setPhotos((prev) => {
                const updated = [...prev];
                updated[index] = uri;
                return updated;
            });
            setHasChanged(true);
        }
    };

    const renderPhotoBlock = (photoUri, index) => {
        if (!photoUri) {
            return (
                <TouchableOpacity style={styles.photoBlock} onPress={() => handlePickImage(index)}>
                    {index < 2 ? <PhotoSVG /> : <GreyPlusSVG />}
                </TouchableOpacity>
            );
        }
        return (
            <TouchableOpacity
                style={styles.photoBlock}
                onPress={() => handlePickImage(index)}
                activeOpacity={0.9}
            >
                <Image source={{ uri: photoUri }} style={styles.photoImage} />
                <View style={styles.overlay}>
                    <PhotoSVG style={styles.overlayIcon} />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <AddPhotoHeader
                title="Add photo"
                onBackPress={handleBackPress}
                onDonePress={handleDonePress}
                doneButtonActive={hasChanged || fromEdit}
            />
            <View style={{ marginTop: 36, paddingHorizontal: 16 }}>
                <View style={styles.photoRow}>
                    {photos.map((photo, index) => (
                        <View key={index} style={styles.photoWrapper}>
                            {renderPhotoBlock(photo, index)}
                        </View>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26284D',
    },
    photoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 4,
    },
    photoWrapper: {
        width: '33%',
    },
    photoBlock: {
        height: 126,
        borderRadius: 12,
        backgroundColor: '#303263',
        paddingTop: 34,
        paddingBottom: 34,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoImage: {
        width: '100%',
        height: 126,
        borderRadius: 12,
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlayIcon: {
        opacity: 0.8,
    },
});
