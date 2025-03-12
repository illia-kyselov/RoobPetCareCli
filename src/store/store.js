/* eslint-disable no-shadow */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import quizReducer from './slices/quizSlice';
import petsReducer from './slices/petsSlice';
import healthDiaryReducer from './slices/healthDiarySlice';
import petCareReducer from './slices/petCareSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['quiz', 'pets', 'healthDiary', 'petCare'],
};

const persistedPetCareReducer = persistReducer(persistConfig, petCareReducer);
const persistedHealthDiaryReducer = persistReducer(persistConfig, healthDiaryReducer);
const persistedPetsReducer = persistReducer(persistConfig, petsReducer);
const persistedQuizReducer = persistReducer(persistConfig, quizReducer);

export const store = configureStore({
    reducer: {
        quiz: persistedQuizReducer,
        pets: persistedPetsReducer,
        healthDiary: persistedHealthDiaryReducer,
        petCare: persistedPetCareReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});

export const persistor = persistStore(store);
