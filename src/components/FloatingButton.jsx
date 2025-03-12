import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PlusSVG from '../assets/paw/PlusSVG';

export default function FloatingButton({ onPress }) {
    return (
        <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
            <PlusSVG />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 136,
        alignSelf: 'center',
        width: 78,
        height: 78,
        borderRadius: 164,
        backgroundColor: '#6C6FCB',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
