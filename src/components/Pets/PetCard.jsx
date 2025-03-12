import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

export default function PetCard({ item, onPress }) {
    const isRemoteImage = typeof item.image === 'string';

    return (
        <TouchableOpacity style={styles.petCard} onPress={onPress}>
            <View style={styles.rowContainer}>
                <Image
                    source={isRemoteImage ? { uri: item.image } : item.image}
                    style={styles.petImage}
                />
                <View style={styles.petBreedContainer}>
                    <Text style={styles.petBreed}>{item.breed}</Text>
                </View>
            </View>
            <Text style={styles.petName}>{item.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    petCard: {
        height: 152,
        borderRadius: 11,
        backgroundColor: '#303263',
        paddingTop: 20,
        paddingRight: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        marginBottom: 6,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 14,
    },
    petImage: {
        width: 87,
        height: 82,
        borderRadius: 375,
    },
    petBreedContainer: {
        borderRadius: 40,
        backgroundColor: '#434583',
        padding: 10,
    },
    petBreed: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 11,
        color: '#FFFFFF',
    },
    petName: {
        fontFamily: 'SF Pro Text',
        fontWeight: '800',
        fontSize: 16,
        color: '#FFFFFF',
    },
});
