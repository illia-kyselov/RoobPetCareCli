import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import ArrowRightSVG from '../../assets/activity/ArrowRightSVG';
import { useNavigation } from '@react-navigation/native';

export default function ActivityScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Feeding and activity schedule" />

            <View style={styles.content}>
                <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => navigation.navigate('IndividualFeeding')}
                >
                    <Text style={styles.itemText}>Individual feeding regimen</Text>
                    <ArrowRightSVG />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => navigation.navigate('RecordingPhysicalActivities')}
                >
                    <Text style={styles.itemText}>Recording physical activities</Text>
                    <ArrowRightSVG />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => navigation.navigate('WeightMonitoring')}
                >
                    <Text style={styles.itemText}>Weight and activity monitoring</Text>
                    <ArrowRightSVG />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26284D',
    },
    content: {
        marginTop: 48,
        paddingHorizontal: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 15,
        backgroundColor: '#303263',
        padding: 15,
        marginBottom: 6,
    },
    itemText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF',
        maxWidth: 210,
    },
});
