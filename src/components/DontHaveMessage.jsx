import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LockSVG from '../assets/paw/LockSVG';

export default function DontHaveMessage({ message = "You don't have any pets here yet." }) {
    return (
        <View style={styles.noPetsContainer}>
            <LockSVG style={styles.lockIcon} />
            <Text style={styles.noPetsText}>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    noPetsContainer: {
        width: 350,
        height: 324,
        backgroundColor: '#303263',
        borderRadius: 15,
        alignSelf: 'center',
        paddingTop: 70,
        paddingBottom: 70,
        paddingHorizontal: 82,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lockIcon: {
        marginBottom: 22,
    },
    noPetsText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
        color: '#FFFFFF',
        textAlign: 'center',
    },
});
