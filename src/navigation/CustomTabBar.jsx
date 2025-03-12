import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import PawSVG from '../assets/navbar/PawSVG';
import CalendarSVG from '../assets/navbar/CalendarSVG';
import QuizSVG from '../assets/navbar/QuizSVG';
import ActivitySVG from '../assets/navbar/ActivitySVG';

export default function CustomTabBar({ state, descriptors, navigation }) {
    const currentRoute = state.routes[state.index];
    const activeRouteName = getFocusedRouteNameFromRoute(currentRoute) ?? currentRoute.name;

    const hideTabBarScreens = [
        'PetDetail',
        'AddPhoto',
        'SelectPhoto',
        'AddPet',
        'Behavior',
        'GrowthHistory',
        'DiaryDetails',
        'NewEntryPetSelection',
        'NewEntryDetails',
        'NewEntryProcedures',
        'EditProcedure',
        'EditDiaryEntry',
        'EditDiaryEntryProcedures',
        'QuizQuestions',
        'IndividualFeeding',
        'AddActivity',
        'ActivityDetails',
        'AddActivitySecond',
        'AddRecordingActivitySecond',
        'RecordingPhysicalActivities',
        'WeightMonitoring',
        'AddWeightActivitySecond',
    ];

    if (hideTabBarScreens.includes(activeRouteName)) {
        return null;
    }

    return (
        <View style={styles.tabBarContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                if (options.showInTabBar === false) {
                    return null;
                }

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                let Icon = null;
                switch (route.name) {
                    case 'PawStack':
                        Icon = PawSVG;
                        break;
                    case 'CalendarStack':
                        Icon = CalendarSVG;
                        break;
                    case 'QuizStack':
                        Icon = QuizSVG;
                        break;
                    case 'ActivityStack':
                        Icon = ActivitySVG;
                        break;
                    default:
                        break;
                }

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={[
                            styles.tabButton,
                            { backgroundColor: isFocused ? '#6C6FCB' : '#303263' },
                        ]}
                    >
                        {Icon && <Icon fill="#fff" opacity={isFocused ? 1 : 0.3} />}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBarContainer: {
        position: 'absolute',
        bottom: 35,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26284D',
        padding: 5,
        borderRadius: 253,
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 9.7,
        elevation: 5,
        gap: 4,
    },
    tabButton: {
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
