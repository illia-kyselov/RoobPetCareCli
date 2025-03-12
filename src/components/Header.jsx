import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title }) {
    const navigation = useNavigation();

    const handleSettingsPress = () => {
        navigation.navigate('SettingsStack', { screen: 'Settings' });
    };

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>

            <TouchableOpacity
                style={styles.settingsButton}
                onPress={handleSettingsPress}
            >
                <Text style={styles.headerSettings}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#26284D',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        position: 'relative',
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0.3 },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 1,
    },
    headerTitle: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF',
        maxWidth: 160,
        textAlign: 'center',
    },
    settingsButton: {
        position: 'absolute',
        right: 16,
    },
    headerSettings: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 16,
        color: '#6C6FCB',
    },
});
