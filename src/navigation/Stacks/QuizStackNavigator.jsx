import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import QuizQuestionsScreen from '../../screens/Quiz/QuizQuestionsScreen';
import QuizScreen from '../../screens/Quiz/QuizScreen';

const Stack = createNativeStackNavigator();

export default function QuizStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Quiz" component={QuizScreen} />

            <Stack.Screen name="QuizQuestions" component={QuizQuestionsScreen} options={{ showInTabBar: false, tabBarStyle: { display: 'none' }, }} />
        </Stack.Navigator>
    );
}
