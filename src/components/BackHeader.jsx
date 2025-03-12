import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowBackSVG from '../assets/paw/ArrowBackSVG';

export default function BackHeader({ title }) {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.backContainer} onPress={handleBackPress}>
                <ArrowBackSVG />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26284D',
        position: 'relative',
        shadowColor: '#FFFFFF40',
        shadowOffset: { width: 0, height: 0.3 },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 1,
    },
    backContainer: {
        position: 'absolute',
        left: 6,
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
        lineHeight: 20,
        color: '#FFFFFF',
        maxWidth: 164,
        textAlign: 'center',
    },
});
