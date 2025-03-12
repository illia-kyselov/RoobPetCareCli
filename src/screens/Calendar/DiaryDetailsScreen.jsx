import React, { useState } from 'react';
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import CalendarHeader from '../../components/Calendar/CalendarHeader';
import DeleteModal from '../../components/DeleteModal';
import { deleteDiaryEntry, deleteProcedureFromDiary } from '../../store/slices/healthDiarySlice';
import ProcedureItem from '../../components/Calendar/ProcedureItem';
import DiaryDetailsHeader from '../../components/Calendar/DiaryDetailsHeader';

export default function DiaryDetailsScreen() {
    const route = useRoute();
    const diaryId = route.params?.item?.id;

    const diary = useSelector(state =>
        state.healthDiary.diaries.find(entry => entry.id === diaryId)
    );

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [diaryModalVisible, setDiaryModalVisible] = useState(false);
    const [procModalVisible, setProcModalVisible] = useState(false);
    const [selectedProcedureIndex, setSelectedProcedureIndex] = useState(null);

    if (!diary) {
        return null;
    }

    const handleDiaryDeletePress = () => {
        setDiaryModalVisible(true);
    };

    const confirmDiaryDelete = () => {
        dispatch(deleteDiaryEntry(diaryId));
        setDiaryModalVisible(false);
        navigation.goBack();
    };

    const handleDiaryEditPress = () => {
        navigation.navigate('EditDiaryEntry', { diary });
    };

    const handleEdit = (procedureIndex) => {
        const procedure = diary.procedures[procedureIndex];
        navigation.navigate('EditProcedure', {
            diaryId,
            procedureIndex,
            procedure,
        });
    };

    const handleDelete = (procedureIndex) => {
        setSelectedProcedureIndex(procedureIndex);
        setProcModalVisible(true);
    };

    const confirmProcedureDelete = () => {
        if (selectedProcedureIndex !== null) {
            dispatch(deleteProcedureFromDiary({ diaryId, procedureIndex: selectedProcedureIndex }));
            setProcModalVisible(false);
            setSelectedProcedureIndex(null);
        }
    };

    const cancelProcedureDelete = () => {
        setProcModalVisible(false);
        setSelectedProcedureIndex(null);
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <CalendarHeader
                onDeletePress={handleDiaryDeletePress}
                onEditPress={handleDiaryEditPress}
            />
            <FlatList
                data={diary.procedures}
                keyExtractor={(_procedure, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
                renderItem={({ item: procedure, index }) => (
                    <ProcedureItem
                        procedure={procedure}
                        index={index}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                )}
                ListHeaderComponent={<DiaryDetailsHeader item={diary} />}
                contentContainerStyle={styles.contentContainer}
            />
            <DeleteModal
                visible={diaryModalVisible}
                onConfirm={confirmDiaryDelete}
                onCancel={() => setDiaryModalVisible(false)}
            />
            <DeleteModal
                visible={procModalVisible}
                onConfirm={confirmProcedureDelete}
                onCancel={cancelProcedureDelete}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#26284D',
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
});
