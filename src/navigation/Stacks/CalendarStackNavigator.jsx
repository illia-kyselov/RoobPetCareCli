import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiaryDetailsScreen from '../../screens/Calendar/DiaryDetailsScreen';
import NewEntryPetSelectionScreen from '../../screens/Calendar/NewEntryPetSelectionScreen';
import NewEntryDetailsScreen from '../../screens/Calendar/NewEntryDetailsScreen';
import NewEntryProceduresScreen from '../../screens/Calendar/NewEntryProceduresScreen';
import EditProcedureScreen from '../../screens/Calendar/EditProcedureScreen';
import EditDiaryEntryScreen from '../../screens/Calendar/EditDiaryEntryScreen';
import EditDiaryEntryProceduresScreen from '../../screens/Calendar/EditDiaryEntryProceduresScreen';
import CalendarScreen from '../../screens/Calendar/CalendarScreen';


const Stack = createNativeStackNavigator();

export default function CalendarStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Calendar" component={CalendarScreen} />

            <Stack.Screen name="DiaryDetails" component={DiaryDetailsScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="NewEntryPetSelection" component={NewEntryPetSelectionScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="NewEntryDetails" component={NewEntryDetailsScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="NewEntryProcedures" component={NewEntryProceduresScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="EditProcedure" component={EditProcedureScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="EditDiaryEntry" component={EditDiaryEntryScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="EditDiaryEntryProcedures" component={EditDiaryEntryProceduresScreen} options={{ showInTabBar: false }} />
        </Stack.Navigator>
    );
}
