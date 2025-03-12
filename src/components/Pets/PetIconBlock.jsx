import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PetIconBlock = ({ image, breed }) => (
    <View style={styles.petHeader}>
        {image ? (
            <Image source={{ uri: image }} style={styles.petImage} />
        ) : (
            <View style={styles.emptyImage} />
        )}
        <View style={styles.breedLabel}>
            <Text style={styles.breedLabelText}>{breed || 'Unknown Breed'}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    petHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    petImage: {
        width: 179,
        height: 179,
        borderRadius: 90,
        marginRight: 16,
    },
    emptyImage: {
        width: 179,
        height: 179,
        marginRight: 16,
    },
    breedLabel: {
        backgroundColor: '#434583',
        borderRadius: 40,
        padding: 10,
    },
    breedLabelText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 11,
        color: '#FFFFFF',
    },
});

export default PetIconBlock;
