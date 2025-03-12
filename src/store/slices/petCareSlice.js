import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    feedingAndActivitySchedule: [],
    recordingPhysicalActivities: [],
    weightAndActivityMonitoring: [],
};

const petCareSlice = createSlice({
    name: 'petCare',
    initialState,
    reducers: {
        addFeedingAndActivitySchedule: {
            reducer: (state, action) => {
                state.feedingAndActivitySchedule.push(action.payload);
            },
            prepare: (payload) => {
                return { payload: { id: nanoid(), ...payload } };
            },
        },
        updateFeedingAndActivitySchedule: (state, action) => {
            const { id } = action.payload;
            const index = state.feedingAndActivitySchedule.findIndex(
                (item) => item.id === id
            );
            if (index !== -1) {
                state.feedingAndActivitySchedule[index] = {
                    ...state.feedingAndActivitySchedule[index],
                    ...action.payload,
                };
            }
        },
        addRecordingPhysicalActivities: {
            reducer: (state, action) => {
                state.recordingPhysicalActivities.push(action.payload);
            },
            prepare: (payload) => {
                return { payload: { id: nanoid(), ...payload } };
            },
        },
        updateRecordingPhysicalActivities: (state, action) => {
            const index = state.recordingPhysicalActivities.findIndex(
                (item) => String(item.petId) === String(action.payload.petId)
            );
            if (index !== -1) {
                state.recordingPhysicalActivities[index] = {
                    ...state.recordingPhysicalActivities[index],
                    ...action.payload,
                };
            }
        },
        addWeightAndActivityMonitoring: {
            reducer: (state, action) => {
                state.weightAndActivityMonitoring.push(action.payload);
            },
            prepare: (payload) => {
                return { payload: { id: nanoid(), ...payload } };
            },
        },
        updateWeightAndActivityMonitoring: (state, action) => {
            const { id } = action.payload;
            const index = state.weightAndActivityMonitoring.findIndex(
                (item) => item.id === id
            );
            if (index !== -1) {
                state.weightAndActivityMonitoring[index] = {
                    ...state.weightAndActivityMonitoring[index],
                    ...action.payload,
                };
            }
        },
        deleteFeedingAndActivitySchedule: (state, action) => {
            const { id } = action.payload;
            state.feedingAndActivitySchedule = state.feedingAndActivitySchedule.filter(
                (item) => item.id !== id
            );
        },
        deleteRecordingPhysicalActivity: (state, action) => {
            const { id } = action.payload;
            state.recordingPhysicalActivities = state.recordingPhysicalActivities.filter(
                (item) => item.id !== id
            );
        },
        deleteWeightAndActivityMonitoring: (state, action) => {
            const { id } = action.payload;
            state.weightAndActivityMonitoring = state.weightAndActivityMonitoring.filter(
                (item) => item.id !== id
            );
        },
    },
});

export const {
    addFeedingAndActivitySchedule,
    updateFeedingAndActivitySchedule,
    addRecordingPhysicalActivities,
    updateRecordingPhysicalActivities,
    addWeightAndActivityMonitoring,
    updateWeightAndActivityMonitoring,
    deleteFeedingAndActivitySchedule,
    deleteRecordingPhysicalActivity,
    deleteWeightAndActivityMonitoring,
} = petCareSlice.actions;

export default petCareSlice.reducer;

export const selectFeedingAndActivitySchedule = (state) => state.petCare.feedingAndActivitySchedule;
export const selectRecordingPhysicalActivities = (state) => state.petCare.recordingPhysicalActivities;
export const selectWeightAndActivityMonitoring = (state) => state.petCare.weightAndActivityMonitoring;
