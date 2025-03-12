import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import PetsHeader from '../../components/Pets/PetsHeader';
import DeleteModal from '../../components/DeleteModal';
import {
    deleteFeedingAndActivitySchedule,
    deleteRecordingPhysicalActivity,
    deleteWeightAndActivityMonitoring
} from '../../store/slices/petCareSlice';
import { selectPetById } from '../../store/slices/petsSlice';

export default function ActivityDetailsScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();

    const { data, recordType } = route.params;
    const pet = useSelector((state) => {
        return data.petId ? selectPetById(state, data.petId) : null;
    });

    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

    const formatLabel = (label) => {
        const result = label.replace(/([A-Z])/g, ' $1').trim();
        return result.charAt(0).toUpperCase() + result.slice(1);
    };

    const detailEntries = Object.entries(data).filter(
        ([key, value]) => key !== 'petId' && key !== 'id' && key !== 'notification' && value
    );

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleEditPress = () => {
        if (recordType === 'feeding') {
            navigation.replace('AddActivitySecond', { feedingSchedule: data, recordType });
        }

        if (recordType === 'recording') {
            navigation.replace('AddRecordingActivitySecond', {
                petId: data.petId,
                recordingActivity: data,
                recordType,
                isEdit: true,
            });
        }

        if (recordType === 'weight') {
            navigation.replace('AddWeightActivitySecond', {
                petId: data.petId,
                weightRecord: data,
                recordType,
                isEdit: true,
            });
        }
    };

    const handleDeletePress = () => {
        setDeleteModalVisible(true);
    };

    const handleModalCancel = () => {
        setDeleteModalVisible(false);
    };

    const handleModalConfirm = () => {
        if (recordType === 'feeding') {
            dispatch(deleteFeedingAndActivitySchedule({ id: data.id }));
        } else if (recordType === 'recording') {
            dispatch(deleteRecordingPhysicalActivity({ id: data.id }));
        } else if (recordType === 'weight') {
            dispatch(deleteWeightAndActivityMonitoring({ id: data.id }));
        }
        setDeleteModalVisible(false);
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <PetsHeader
                onBackPress={handleBackPress}
                onEditPress={handleEditPress}
                onDeletePress={handleDeletePress}
            />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.iconContainer}>
                    {pet && pet.image ? (
                        <Image source={{ uri: pet.image }} style={styles.petIcon} />
                    ) : (
                        <View style={styles.petIconPlaceholder} />
                    )}
                </View>
                <View style={styles.detailsContainer}>
                    {detailEntries.map(([key, value]) => (
                        <View key={key} style={styles.detailBlock}>
                            <Text style={styles.detailLabel}>{formatLabel(key)}</Text>
                            <Text style={styles.detailValue}>{value}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <DeleteModal
                visible={deleteModalVisible}
                onCancel={handleModalCancel}
                onConfirm={handleModalConfirm}
            />
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
        paddingTop: 26,
    },
    iconContainer: {
        alignItems: 'flex-start',
        marginBottom: 24,
    },
    petIcon: {
        width: 55,
        height: 55,
        borderRadius: 375,
    },
    petIconPlaceholder: {
        width: 55,
        height: 55,
        borderRadius: 375,
        backgroundColor: '#303263',
    },
    detailsContainer: {},
    detailBlock: {
        marginBottom: 16,
    },
    detailLabel: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.5)',
        marginBottom: 4,
    },
    detailValue: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
    },
});
