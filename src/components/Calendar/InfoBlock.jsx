import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoBlock = ({ title, value }) => (
    <View style={styles.infoBlock}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.sectionText}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    infoBlock: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 14,
        color: '#FFFFFF',
        opacity: 0.5,
        marginBottom: 4,
    },
    sectionText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
    },
});

export default InfoBlock;
