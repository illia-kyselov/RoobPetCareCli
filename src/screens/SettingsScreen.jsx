import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import ArrowRightSVG from '../assets/settings/ArrowRightSVG';
import SettingsHeader from '../components/SettingsHeader';

export default function SettingsScreen() {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <SettingsHeader />

            <View style={styles.contentContainer}>
                <View style={styles.rateBlock}>
                    <Image
                        source={require('../assets/settings/settings.png')}
                        style={styles.settingsImage}
                    />
                    <Text style={styles.rateTitle}>Rate us!</Text>
                    <Text style={styles.rateSubtitle}>
                        Click the button below to rate our application
                    </Text>
                    <TouchableOpacity style={styles.rateButton}>
                        <Text style={styles.rateButtonText}>Rate</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.listItem}
                    onPress={() => console.log('Privacy policy')}
                >
                    <Text style={styles.listItemText}>Privacy policy</Text>
                    <ArrowRightSVG />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.listItem}
                    onPress={() => console.log('Terms of use')}
                >
                    <Text style={styles.listItemText}>Terms of use</Text>
                    <ArrowRightSVG />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.listItem}
                    onPress={() => console.log('Developer website')}
                >
                    <Text style={styles.listItemText}>Developer's website</Text>
                    <ArrowRightSVG />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#26284D',
    },
    contentContainer: {
        marginTop: 18,
        paddingHorizontal: 20,
    },
    rateBlock: {
        borderRadius: 15,
        backgroundColor: '#303263',
        paddingTop: 35,
        paddingBottom: 30,
        paddingHorizontal: 22,
        marginBottom: 6,
        alignItems: 'center',
    },
    settingsImage: {
        marginBottom: 10,
        resizeMode: 'contain',
    },
    rateTitle: {
        fontFamily: 'SF Pro Text',
        fontWeight: '800',
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 8,
    },
    rateSubtitle: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 15,
        color: '#FFFFFF',
        marginBottom: 10,
        width: 221,
        textAlign: 'center',
    },
    rateButton: {
        height: 56,
        borderRadius: 40,
        backgroundColor: '#6C6FCB',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%',
    },
    rateButtonText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 18,
        color: '#FFFFFF',
    },
    listItem: {
        height: 56,
        borderRadius: 15,
        backgroundColor: '#303263',
        padding: 16,
        marginBottom: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontFamily: 'SF Pro Display',
        fontWeight: '600',
        fontSize: 17,
        color: '#FFFFFF',
    },
});
