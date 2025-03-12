import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from './CustomTabBar';
import PawStackNavigator from './Stacks/PawStackNavigator';
import CalendarStackNavigator from './Stacks/CalendarStackNavigator';
import QuizStackNavigator from './Stacks/QuizStackNavigator';
import ActivityStackNavigator from './Stacks/ActivityStackNavigator';
import SettingsStackNavigator from './Stacks/SettingsStackNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="PawStack" component={PawStackNavigator} />
            <Tab.Screen name="CalendarStack" component={CalendarStackNavigator} />
            <Tab.Screen name="QuizStack" component={QuizStackNavigator} />
            <Tab.Screen name="ActivityStack" component={ActivityStackNavigator} />

            <Tab.Screen name="SettingsStack" component={SettingsStackNavigator} options={{ showInTabBar: false }} />
        </Tab.Navigator>
    );
}
