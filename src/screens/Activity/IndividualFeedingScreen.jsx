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
    deleteFeedingAndActivitySchedule,
    selectFeedingAndActivitySchedule,
} from '../../store/slices/petCareSlice';

export default function IndividualFeedingScreen() {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const rawFeedingSchedules = useSelector(selectFeedingAndActivitySchedule);
    const feedingSchedules = useMemo(() => rawFeedingSchedules || [], [rawFeedingSchedules]);

    const isEmpty = !feedingSchedules || feedingSchedules.length === 0;

    const petsArray = useSelector(state => state.pets.pets);

    const petsMapping = useMemo(() => {
        const mapping = {};
        feedingSchedules.forEach(schedule => {
            mapping[schedule.petId] = petsArray.find(pet => pet.id === schedule.petId);
        });
        return mapping;
    }, [feedingSchedules, petsArray]);

    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [selectedSchedule, setSelectedSchedule] = useState(null);
    const [openSwipeableId, setOpenSwipeableId] = useState(null);

    const handleEdit = (item) => {
        navigation.replace('AddActivitySecond', { feedingSchedule: item });
    };

    const handleDelete = (item) => {
        setSelectedSchedule(item);
        setDeleteModalVisible(true);
    };

    const handleModalCancel = () => {
        setDeleteModalVisible(false);
        setSelectedSchedule(null);
    };

    const handleModalConfirm = () => {
        if (selectedSchedule) {
            dispatch(deleteFeedingAndActivitySchedule({ id: selectedSchedule.id }));
        }
        setDeleteModalVisible(false);
        setSelectedSchedule(null);
    };

    const handlePressItem = (item) => {
        navigation.replace('ActivityDetails', { data: item, recordType: 'feeding' });
    };

    const handleFloatingButtonPress = () => {
        navigation.navigate('AddActivity'), { recordType: 'feeding' };
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
                        <Text style={styles.scheduleText}>
                            M - {item.morningFeedingTime}, {item.morningFeedAmount} | E - {item.eveningFeedingTime}, {item.eveningFeedAmount}
                        </Text>
                        <View style={styles.petInfo}>
                            {pet && pet.image && (
                                <Image source={{ uri: pet.image }} style={styles.petIcon} />
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
            <BackHeader title="Feeding and activity schedule" />
            {isEmpty ? (
                <View style={styles.content}>
                    <DontHaveMessage />
                </View>
            ) : (
                <FlatList
                    contentContainerStyle={styles.cardContainer}
                    data={feedingSchedules}
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
        height: 90,
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
    scheduleText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 11,
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
    petName: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 13,
        lineHeight: 22,
        color: '#FFFFFF',
    },
    actionsContainer: {
        flexDirection: 'row',
        height: 90,
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
