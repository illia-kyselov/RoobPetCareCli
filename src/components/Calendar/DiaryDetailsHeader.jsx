import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import InfoBlock from './InfoBlock';

const DiaryDetailsHeader = ({ item }) => {
    const infoBlocks = [
        { title: 'Date of visit', value: item.dateTime },
        { title: "Doctor's name", value: item.doctorName },
        { title: 'Weight at the time of visit', value: item.weight },
        { title: 'Reason for visit', value: item.reason },
        { title: 'Body temperature (°C)', value: item.temperature },
        { title: 'Diagnostic Results', value: item.diagnosticResults },
    ];

    return (
        <View style={styles.listHeader}>
            <View style={styles.petContainer}>
                <Image source={{ uri: item.petImage }} style={styles.petImage} />
            </View>

            {infoBlocks.map((block, index) => (
                <InfoBlock key={index} title={block.title} value={block.value} />
            ))}

            <Text style={styles.proceduresTitle}>Procedures</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listHeader: {
        paddingTop: 26,
    },
    petContainer: {
        marginBottom: 24,
    },
    petImage: {
        width: 55,
        height: 55,
        borderRadius: 375,
        marginBottom: 24,
    },
    proceduresTitle: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 12,
    },
});

export default DiaryDetailsHeader;
