import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ArrowBackSVG from '../../assets/paw/ArrowBackSVG';

const QuizHeader = ({ onBackPress, onSettingsPress }) => (
    <View style={styles.header}>
        <TouchableOpacity style={styles.backContainer} onPress={onBackPress}>
            <ArrowBackSVG />
            <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Quiz</Text>
        <TouchableOpacity onPress={onSettingsPress}>
            <Text style={styles.settingsText}>Settings</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#26284D',
        paddingHorizontal: 16,
        paddingVertical: 12,
        shadowColor: '#FFFFFF40',
        shadowOffset: { width: 0, height: 0.3 },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 1,
    },
    backContainer: {
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
    title: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
        color: '#FFFFFF',
    },
    settingsText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
        color: '#6C6FCB',
    },
});

export default QuizHeader;
