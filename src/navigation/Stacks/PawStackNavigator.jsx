import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PetDetailScreen from '../../screens/Paw/PetDetailScreen';
import AddPhotoScreen from '../../screens/Paw/AddPhotoScreen';
import SelectPhotoScreen from '../../screens/Paw/SelectPhotoScreen';
import AddPetScreen from '../../screens/Paw/AddPetScreen';
import BehaviorScreen from '../../screens/Paw/BehaviorScreen';
import GrowthHistoryScreen from '../../screens/Paw/GrowthHistoryScreen';
import PawScreen from '../../screens/Paw/PawScreen';

const Stack = createNativeStackNavigator();

export default function PawStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Paw" component={PawScreen} />

            <Stack.Screen name="PetDetail" component={PetDetailScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="AddPhoto" component={AddPhotoScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="SelectPhoto" component={SelectPhotoScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="AddPet" component={AddPetScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="Behavior" component={BehaviorScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="GrowthHistory" component={GrowthHistoryScreen} options={{ showInTabBar: false }} />
        </Stack.Navigator>
    );
}
