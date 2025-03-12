import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActivityScreen from '../../screens/Activity/ActivityScreen';
import IndividualFeedingScreen from '../../screens/Activity/IndividualFeedingScreen';
import ActivityDetailsScreen from '../../screens/Activity/ActivityDetailsScreen';
import AddActivityScreen from '../../screens/Activity/AddActivityScreen';
import AddActivitySecondScreen from '../../screens/Activity/AddActivitySecondScreen';
import RecordingPhysicalActivitiesScreen from '../../screens/Activity/RecordingPhysicalActivitiesScreen';
import AddRecordingActivitySecondScreen from '../../screens/Activity/AddRecordingActivitySecondScreen';
import WeightMonitoringScreen from '../../screens/Activity/WeightMonitoringScreen';
import AddWeightActivitySecondScreen from '../../screens/Activity/AddWeightActivitySecondScreen';

const Stack = createNativeStackNavigator();

export default function ActivityStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Activity" component={ActivityScreen} />

            <Stack.Screen name="IndividualFeeding" component={IndividualFeedingScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="ActivityDetails" component={ActivityDetailsScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="AddActivity" component={AddActivityScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="AddActivitySecond" component={AddActivitySecondScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="RecordingPhysicalActivities" component={RecordingPhysicalActivitiesScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="AddRecordingActivitySecond" component={AddRecordingActivitySecondScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="WeightMonitoring" component={WeightMonitoringScreen} options={{ showInTabBar: false }} />
            <Stack.Screen name="AddWeightActivitySecond" component={AddWeightActivitySecondScreen} options={{ showInTabBar: false }} />
        </Stack.Navigator>
    );
}
