import React, { useState, useMemo } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import BackHeader from '../../components/BackHeader';
import FloatingButton from '../../components/FloatingButton';
import DontHaveMessage from '../../components/DontHaveMessage';
import DeleteModal from '../../components/DeleteModal';
import EditSVG from '../../assets/calendar/EditSVG';
import DeleteSVG from '../../assets/calendar/DeleteSVG';
import {
    deleteRecordingPhysicalActivity,
    selectRecordingPhysicalActivities,
} from '../../store/slices/petCareSlice';

export default function RecordingPhysicalActivitiesScreen() {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const rawActivities = useSelector(selectRecordingPhysicalActivities);
    const activities = useMemo(() => rawActivities || [], [rawActivities]);

    const isEmpty = !activities || activities.length === 0;

    const petsArray = useSelector(state => state.pets.pets);
    const petsMapping = useMemo(() => {
        const mapping = {};
        activities.forEach(activity => {
            mapping[activity.petId] = petsArray.find(pet => pet.id === activity.petId);
        });
        return mapping;
    }, [activities, petsArray]);

    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [openSwipeableId, setOpenSwipeableId] = useState(null);

    const handleEdit = (item) => {
        navigation.replace('AddRecordingActivitySecond', {
            petId: item.petId,
            recordingActivity: item,
            isEdit: true,
            recordType: 'recording',
        });
    };

    const handleDelete = (item) => {
        setSelectedActivity(item);
        setDeleteModalVisible(true);
    };

    const handleModalCancel = () => {
        setDeleteModalVisible(false);
        setSelectedActivity(null);
    };

    const handleModalConfirm = () => {
        if (selectedActivity) {
            dispatch(deleteRecordingPhysicalActivity({ id: selectedActivity.id }));
        }
        setDeleteModalVisible(false);
        setSelectedActivity(null);
    };

    const handlePressItem = (item) => {
        navigation.replace('ActivityDetails', { data: item, recordType: 'recording' });
    };

    const handleFloatingButtonPress = () => {
        navigation.navigate('AddActivity', { recordType: 'recording' });
    };

    const renderRightActions = (item) => (
        <View style={styles.actionsContainer}>
            <TouchableOpacity
                style={[styles.actionBase, styles.editAction]}
                onPress={() => handleEdit(item)}
            >
                <EditSVG />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.actionBase, styles.deleteAction]}
                onPress={() => handleDelete(item)}
            >
                <DeleteSVG />
            </TouchableOpacity>
        </View>
    );

    const renderItem = ({ item }) => {
        const pet = petsMapping[item.petId];
        return (
            <Swipeable
                renderRightActions={() => renderRightActions(item)}
                overshootRight={false}
                onSwipeableWillOpen={() => setOpenSwipeableId(item.id)}
                onSwipeableWillClose={() => setOpenSwipeableId(null)}
            >
                <TouchableOpacity onPress={() => handlePressItem(item)} activeOpacity={0.7}>
                    <View style={[styles.card, openSwipeableId === item.id && styles.cardNoRightRadius]}>
                        <Text style={styles.activityText}>
                            {item.typeOfActivity} – {item.duration}
                        </Text>
                        <Text style={styles.activityDetails}>
                            Date: {item.dateOfActivity}, Time: {item.activityTime}
                        </Text>
                        <View style={styles.petInfo}>
                            {pet && pet.image ? (
                                <Image source={{ uri: pet.image }} style={styles.petIcon} />
                            ) : (
                                <View style={styles.petIconPlaceholder} />
                            )}
                            <Text style={styles.petName}>
                                {pet ? pet.name : 'Unknown Pet'}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Swipeable>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <BackHeader title="Recording Physical Activities" />
            {isEmpty ? (
                <View style={styles.content}>
                    <DontHaveMessage />
                </View>
            ) : (
                <FlatList
                    contentContainerStyle={styles.cardContainer}
                    data={activities}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            )}
            <FloatingButton onPress={handleFloatingButtonPress} />
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
    content: {
        marginTop: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        paddingTop: 45,
        paddingHorizontal: 15,
    },
    card: {
        height: 100,
        borderRadius: 15,
        padding: 15,
        backgroundColor: '#303263',
        marginBottom: 5,
        justifyContent: 'center',
    },
    cardNoRightRadius: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    activityText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 4,
    },
    activityDetails: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.5)',
        marginBottom: 8,
    },
    petInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    petIcon: {
        width: 32,
        height: 32,
        borderRadius: 375,
        marginRight: 9,
    },
    petIconPlaceholder: {
        width: 32,
        height: 32,
        borderRadius: 375,
        backgroundColor: '#303263',
        marginRight: 9,
    },
    petName: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 13,
        lineHeight: 22,
        color: '#FFFFFF',
    },
    actionsContainer: {
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
    },
    actionBase: {
        width: 58,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editAction: {
        backgroundColor: '#FFFFFF',
        borderRightWidth: 0.5,
        borderRightColor: 'rgba(0, 0, 0, 0.25)',
    },
    deleteAction: {
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
});
