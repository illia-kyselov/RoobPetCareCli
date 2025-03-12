import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    diaries: [],
};

const healthDiarySlice = createSlice({
    name: 'healthDiary',
    initialState,
    reducers: {
        addDiaryEntry: (state, action) => {
            const newEntry = action.payload;
            if (!newEntry.hasOwnProperty('procedures')) {
                newEntry.procedures = [];
            }
            state.diaries.push(newEntry);
        },
        deleteDiaryEntry: (state, action) => {
            state.diaries = state.diaries.filter(entry => entry.id !== action.payload);
        },
        deleteProcedureFromDiary: (state, action) => {
            const { diaryId, procedureIndex } = action.payload;
            const diary = state.diaries.find(entry => entry.id === diaryId);
            if (diary && Array.isArray(diary.procedures)) {
                diary.procedures = diary.procedures.filter((_, index) => index !== procedureIndex);
            }
        },
        updateProcedureInDiary: (state, action) => {
            const { diaryId, procedureIndex, updatedProcedure } = action.payload;
            const diary = state.diaries.find(entry => entry.id === diaryId);
            if (diary && Array.isArray(diary.procedures)) {
                diary.procedures[procedureIndex] = updatedProcedure;
            }
        },
        updateDiaryEntry: (state, action) => {
            const { id, updatedDiary } = action.payload;
            const index = state.diaries.findIndex(entry => entry.id === id);
            if (index !== -1) {
                state.diaries[index] = { ...state.diaries[index], ...updatedDiary };
            }
        },
    },
});

export const {
    addDiaryEntry,
    deleteDiaryEntry,
    deleteProcedureFromDiary,
    updateProcedureInDiary,
    updateDiaryEntry,
} = healthDiarySlice.actions;
export const selectDiaryEntries = state => state.healthDiary.diaries;
export default healthDiarySlice.reducer;
