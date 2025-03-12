import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ArrowBackSVG from '../../assets/paw/ArrowBackSVG';
import EditSVG from '../../assets/paw/EditSVG';
import DeleteSVG from '../../assets/paw/DeleteSVG';

const PetsHeader = ({ onBackPress, onEditPress, onDeletePress }) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
            <ArrowBackSVG />
            <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.editButton} onPress={onEditPress}>
                <EditSVG />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={onDeletePress}>
                <DeleteSVG />
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#26284D',
        height: 60,
        paddingHorizontal: 16,
        marginTop: 9,
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0.3 },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 1,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 16,
        color: '#6C6FCB',
        marginLeft: 4,
    },
    actionButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    editButton: {
        width: 42,
        height: 36,
        borderRadius: 43,
        backgroundColor: '#0A84FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 3,
        padding: 10,
    },
    deleteButton: {
        width: 42,
        height: 34,
        borderRadius: 43,
        backgroundColor: '#FF382B',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
});

export default PetsHeader;
