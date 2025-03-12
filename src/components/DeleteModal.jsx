import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ModalDeleteSVG from '../assets/ModalDeleteSVG';

export default function DeleteModal({
    visible = false,
    onConfirm,
    onCancel,
}) {
    if (!visible) {
        return null;
    }

    return (
        <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
                <ModalDeleteSVG style={styles.modalIcon} />
                <Text style={styles.modalTitle}>Delete</Text>
                <Text style={styles.modalSubtitle}>
                    Are you sure you want to delete?
                </Text>

                <View style={styles.buttonsRow}>
                    <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.deleteButton} onPress={onConfirm}>
                        <Text style={styles.deleteButtonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(13, 13, 13, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: 315,
        borderRadius: 15,
        backgroundColor: '#26284D',
        paddingTop: 22,
        paddingRight: 27,
        paddingBottom: 22,
        paddingLeft: 27,
        alignItems: 'center',
    },
    modalIcon: {
        marginBottom: 12,
    },
    modalTitle: {
        fontFamily: 'SF Pro Text',
        fontWeight: '800',
        fontSize: 20,
        color: '#FFFFFF',
        marginBottom: 2,
    },
    modalSubtitle: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.5)',
        marginBottom: 13,
        textAlign: 'center',
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        height: 51,
        borderRadius: 15,
        backgroundColor: '#007BFE',
        paddingHorizontal: 38,
        paddingVertical: 17,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelButtonText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 14,
        color: '#FFFFFF',
    },
    deleteButton: {
        height: 51,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#FF0000',
        paddingHorizontal: 40,
        paddingVertical: 17,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteButtonText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 14,
        color: '#FF0000',
    },
});
