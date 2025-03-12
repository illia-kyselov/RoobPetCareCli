import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pets: [],
};

const petsSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {
        addPet: (state, action) => {
            state.pets.push(action.payload);
        },
        deletePet: (state, action) => {
            const petId = action.payload;
            state.pets = state.pets.filter((pet) => pet.id !== petId);
        },
        updatePetPhotoGallery: (state, action) => {
            const { petId, photoGallery } = action.payload;
            const pet = state.pets.find((pet) => pet.id === petId);
            if (pet) {
                pet.photoGallery = photoGallery;
            }
        },
        updatePetGrowthHistory: (state, action) => {
            const { petId, newGrowthHistory } = action.payload;
            const pet = state.pets.find((p) => p.id === petId);
            if (pet) {
                if (!pet.growthHistory) {
                    pet.growthHistory = [];
                }
                pet.growthHistory.push(newGrowthHistory);
            }
        },
        updatePetBehavior: (state, action) => {
            const { petId, newBehavior } = action.payload;
            const pet = state.pets.find((p) => p.id === petId);
            if (pet) {
                if (!pet.behavior) {
                    pet.behavior = [];
                }
                pet.behavior.push(newBehavior);
            }
        },
    },
});

export const {
    addPet,
    deletePet,
    updatePetPhotoGallery,
    updatePetGrowthHistory,
    updatePetBehavior,
} = petsSlice.actions;

export default petsSlice.reducer;

export const selectPets = (state) => state.pets.pets;
export const selectPetById = (state, petId) =>
    state.pets.pets.find((pet) => pet.id === petId);
