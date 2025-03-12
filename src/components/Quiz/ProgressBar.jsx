import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ current, total }) => {
    const progressWidth = (current / total) * 100 + '%';

    return (
        <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
                <View style={[styles.progressBarFill, { width: progressWidth }]} />
            </View>
            <Text style={styles.progressText}>{current}/{total}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
    },
    progressBar: {
        flex: 1,
        height: 12,
        backgroundColor: '#303263',
        borderRadius: 16,
        marginRight: 14,
    },
    progressBarFill: {
        height: 12,
        backgroundColor: '#6C6FCB',
        borderRadius: 16,
    },
    progressText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '800',
        fontSize: 14,
        color: '#FFFFFF',
    },
});

export default ProgressBar;
