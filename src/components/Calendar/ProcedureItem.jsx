import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import EditSVG from '../../assets/calendar/EditSVG';
import DeleteSVG from '../../assets/calendar/DeleteSVG';

const ProcedureItem = ({ procedure, index, onEdit, onDelete }) => {
    const [isSwiping, setIsSwiping] = useState(false);

    const renderRightActions = () => (
        <View style={styles.actionsContainer}>
            <TouchableOpacity
                style={[styles.actionBase, styles.editAction]}
                onPress={() => onEdit(index)}
            >
                <EditSVG />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.actionBase, styles.deleteAction]}
                onPress={() => onDelete(index)}
            >
                <DeleteSVG />
            </TouchableOpacity>
        </View>
    );

    return (
        <Swipeable
            renderRightActions={renderRightActions}
            onSwipeableWillOpen={() => setIsSwiping(true)}
            onSwipeableClose={() => setIsSwiping(false)}
        >
            <View style={[styles.procedureContainer, isSwiping && styles.swipingItem]}>
                <Text style={styles.procedureLabel}>Type of Procedure</Text>
                <Text style={styles.procedureValue}>{procedure.type}</Text>

                <Text style={styles.procedureLabel}>Medication Name</Text>
                <Text style={styles.procedureValue}>{procedure.medicationName}</Text>

                <Text style={styles.procedureLabel}>Date</Text>
                <Text style={styles.procedureValue}>{procedure.dateTime}</Text>

                <Text style={styles.procedureLabel}>Description</Text>
                <Text style={styles.procedureValue}>{procedure.description}</Text>

                <Text style={styles.procedureLabel}>Repetition</Text>
                <Text style={styles.procedureValue}>{procedure.repetition}</Text>
            </View>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    procedureContainer: {
        backgroundColor: '#303263',
        borderRadius: 15,
        padding: 15,
    },
    swipingItem: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    procedureLabel: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 12,
        color: '#FFFFFF',
        opacity: 0.5,
        marginBottom: 4,
    },
    procedureValue: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 16,
    },
    actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        overflow: 'hidden',
    },
    actionBase: {
        width: 58,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    editAction: {
        borderRightWidth: 0.5,
        borderRightColor: '#00000040',
        shadowColor: '#000000',
        shadowOffset: { width: -1, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 1,
    },
    deleteAction: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#FFFFFF',
    },
});

export default ProcedureItem;
