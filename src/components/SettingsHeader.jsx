import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowBackSVG from '../assets/paw/ArrowBackSVG';

export default function SettingsHeader() {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backContainer} onPress={handleBackPress}>
                <ArrowBackSVG />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Settings</Text>
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
    backContainer: {
        position: 'absolute',
        left: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        marginLeft: 4,
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 16,
        color: '#6C6FCB',
    },
    headerTitle: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        maxWidth: 164,
    },
});
