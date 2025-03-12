import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import RadioActiveSVG from '../../assets/calendar/RadioActiveSVG';
import RadioDisableSVG from '../../assets/calendar/RadioDisableSVG';

export default function RemindModal({
    isVisible,
    onClose,
    onReset,
    remindOptions,
    selectedRemind,
    setSelectedRemind,
}) {
    return (
        <Modal
            isVisible={isVisible}
            backdropColor="#0D0D0D"
            backdropOpacity={0.6}
            onBackdropPress={onClose}
            onSwipeComplete={onClose}
            swipeDirection="down"
            style={styles.modalContainer}
        >
            <View style={styles.modalContent}>

                <View style={styles.dragIndicator} />

                <View style={styles.modalHeader}>
                    <Text style={styles.filtersText}>Filters</Text>
                    <TouchableOpacity style={styles.resetButton} onPress={onReset}>
                        <Text style={styles.resetButtonText}>Reset</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: 32 }} />

                <Text style={styles.modalQuestion}>When to remind?</Text>

                {remindOptions.map((option, index) => (
                    <View key={option.id}>
                        <TouchableOpacity
                            style={styles.remindOptionRow}
                            onPress={() => setSelectedRemind(option.id)}
                        >
                            <Text style={styles.remindOptionText}>{option.label}</Text>
                            {selectedRemind === option.id ? (
                                <RadioActiveSVG />
                            ) : (
                                <RadioDisableSVG />
                            )}
                        </TouchableOpacity>

                        {index < remindOptions.length - 1 && (
                            <View style={styles.separator} />
                        )}
                    </View>
                ))}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        height: 374,
        backgroundColor: '#303263',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingHorizontal: 20,
    },
    dragIndicator: {
        alignSelf: 'center',
        marginTop: 6,
        width: 48,
        height: 2,
        borderRadius: 99,
        backgroundColor: '#FFFFFF',
        marginBottom: 6,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    filtersText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 25,
        color: '#FFFFFF',
    },
    resetButton: {
        width: 90,
        height: 36,
        borderRadius: 4,
        backgroundColor: '#434583',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resetButtonText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 20,
        color: '#FFFFFF',
    },
    modalQuestion: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 22,
        color: 'rgba(255, 255, 255, 0.5)',
        marginBottom: 10,
    },
    remindOptionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    remindOptionText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 22,
        color: '#FFFFFF',
    },
    separator: {
        height: 0.5,
        backgroundColor: '#E8E9ED',
        marginBottom: 12,
    },
});
