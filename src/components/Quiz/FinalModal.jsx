import React from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import CloseSVG from '../../assets/quiz/CloseSVG';
import GrayDoneSVG from '../../assets/quiz/GrayDoneSVG';

export default function FinalModal({ visible, onClose }) {
    if (!visible) {return null;}

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <CloseSVG />
                    </TouchableOpacity>

                    <Text style={styles.title}>Excellent</Text>

                    <GrayDoneSVG />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(13, 13, 13, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: 350,
        height: 347,
        borderRadius: 15,
        backgroundColor: '#26284D',
        paddingBottom: 62,
        paddingTop: 12,
        paddingRight: 9,
        alignItems: 'center',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: 12,
        right: 9,
        width: 31,
        height: 31,
        borderRadius: 92.59,
        backgroundColor: '#FFFFFF40',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 36,
        marginBottom: 42,
        fontFamily: 'SF Pro Text',
        fontWeight: '800',
        fontSize: 45,
        color: '#FFFFFF',
        textAlign: 'center',
    },
});
