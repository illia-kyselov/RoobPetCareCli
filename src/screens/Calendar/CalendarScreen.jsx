import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import DontHaveMessage from '../../components/DontHaveMessage';
import Header from '../../components/Header';
import FloatingButton from '../../components/FloatingButton';
import DeleteModal from '../../components/DeleteModal';
import { selectDiaryEntries, deleteDiaryEntry } from '../../store/slices/healthDiarySlice';
import EditSVG from '../../assets/calendar/EditSVG';
import DeleteSVG from '../../assets/calendar/DeleteSVG';

export default function CalendarScreen() {
    const diaries = useSelector(selectDiaryEntries);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [selectedDiaryId, setSelectedDiaryId] = useState(null);

    const handleEdit = (id) => {
        const diary = diaries.find(entry => entry.id === id);
        if (diary) {
            navigation.replace('EditDiaryEntry', { diary });
        }
    };

    const handleDelete = (id) => {
        setSelectedDiaryId(id);
        setDeleteModalVisible(true);
    };

    const handleItemPress = (item) => {
        navigation.navigate('DiaryDetails', { item });
    };

    const renderRightActions = (id) => (
        <View style={styles.actionsContainer}>
            <TouchableOpacity style={[styles.actionBase, styles.editAction]} onPress={() => handleEdit(id)}>
                <EditSVG />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionBase, styles.deleteAction]} onPress={() => handleDelete(id)}>
                <DeleteSVG />
            </TouchableOpacity>
        </View>
    );

    const renderItem = ({ item }) => (
        <Swipeable renderRightActions={() => renderRightActions(item.id)} overshootRight={false}>
            <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.diaryCard}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>{item.dateTime}</Text>
                <View style={styles.petInfoRow}>
                    <Image source={{ uri: item.petImage }} style={styles.petImage} />
                    <Text style={styles.petName}>{item.petName}</Text>
                </View>
            </TouchableOpacity>
        </Swipeable>
    );

    const handleAddPress = () => {
        navigation.navigate('NewEntryPetSelection');
    };

    const handleModalCancel = () => {
        setDeleteModalVisible(false);
        setSelectedDiaryId(null);
    };

    const handleModalConfirm = () => {
        if (selectedDiaryId) {
            dispatch(deleteDiaryEntry(selectedDiaryId));
            if (navigation.canGoBack()) {
                navigation.goBack();
            }
        }
        setDeleteModalVisible(false);
        setSelectedDiaryId(null);
    };


    return (
        <SafeAreaView style={styles.safeContainer}>
            <Header title="Health Diary" />
            <View style={styles.contentContainer}>
                {diaries.length === 0 ? (
                    <View style={{ marginTop: 65 }}>
                        <DontHaveMessage message="You don't have anything here yet.." />
                    </View>
                ) : (
                    <FlatList
                        data={diaries}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 80 }}
                        style={{ marginTop: 42 }}
                    />
                )}
            </View>
            <FloatingButton onPress={handleAddPress} />
            <DeleteModal visible={deleteModalVisible} onCancel={handleModalCancel} onConfirm={handleModalConfirm} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#26284D',
    },
    contentContainer: {
        flex: 1,
    },
    diaryCard: {
        height: 120,
        backgroundColor: '#303263',
        borderRadius: 15,
        marginBottom: 5,
        padding: 15,
    },
    title: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 10,
    },
    date: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 11,
        color: '#FFFFFF',
        opacity: 0.5,
        marginBottom: 8,
    },
    petInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    petImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 9,
    },
    petName: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 13,
        color: '#FFFFFF',
    },
    actionsContainer: {
        flexDirection: 'row',
        height: 120,
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
        borderRightColor: '#00000040',
        shadowColor: '#FFFFFF',
        shadowOffset: { width: -0.5, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 0,
    },
    deleteAction: {
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
});
