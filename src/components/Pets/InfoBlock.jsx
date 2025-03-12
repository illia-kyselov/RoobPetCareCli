import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoBlock = ({ label, value }) => (
    <View style={styles.infoBlock}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    infoBlock: {
        marginBottom: 16,
    },
    infoLabel: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.5)',
        marginBottom: 4,
    },
    infoValue: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
    },
});

export default InfoBlock;
