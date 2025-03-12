import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import LockSVG from '../../assets/paw/LockSVG';
import PlusSVG from '../../assets/paw/PlusSVG';

const Section = ({
    title,
    photos = [],
    growthHistory = [],
    behavior = [],
    onPress,
}) => {
    const hasPhotos = photos && photos.length > 0;
    const hasGrowthHistory = growthHistory && growthHistory.length > 0;
    const hasBehavior = behavior && behavior.length > 0;

    if (!hasPhotos && !hasGrowthHistory && !hasBehavior) {
        return (
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <View style={styles.lockContainer}>
                    <LockSVG width={62} height={62} style={styles.sectionIcon} />
                    <Text style={styles.sectionEmptyText}>Nothing here yet</Text>
                    <TouchableOpacity style={styles.plusButton} onPress={onPress}>
                        <PlusSVG width={20} height={20} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    if (hasPhotos) {
        return (
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <View style={styles.photosContainer}>
                    {photos.slice(0, 3).map((photo, index) => (
                        <Image
                            key={index}
                            source={typeof photo === 'string' ? { uri: photo } : photo}
                            style={[
                                styles.photoItem,
                                index < photos.length - 1 && { marginRight: 4 },
                            ]}
                        />
                    ))}
                </View>
                <TouchableOpacity
                    style={[styles.plusButton, styles.plusButtonData]}
                    onPress={onPress}
                >
                    <PlusSVG width={20} height={20} />
                </TouchableOpacity>
            </View>
        );
    }

    if (hasGrowthHistory) {
        return (
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <View style={styles.growthContainer}>
                    {growthHistory.map((entry, index) => (
                        <View key={index} style={styles.growthEntry}>
                            <View style={styles.growthEntryRow}>
                                <Text style={styles.growthDate}>{entry.date}</Text>
                                <Text style={styles.growthMeasurement}>{entry.measurement}</Text>
                            </View>
                            {entry.note ? (
                                <Text style={styles.growthNote}>{entry.note}</Text>
                            ) : null}
                        </View>
                    ))}
                </View>
                <TouchableOpacity
                    style={[styles.plusButton, styles.plusButtonData]}
                    onPress={onPress}
                >
                    <PlusSVG width={20} height={20} />
                </TouchableOpacity>
            </View>
        );
    }

    if (hasBehavior) {
        return (
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <View style={styles.behaviorContainer}>
                    {behavior.map((entry, index) => (
                        <View key={index} style={styles.behaviorEntry}>
                            <Text style={styles.behaviorDate}>{entry.date}</Text>
                            {entry.note && (
                                <Text style={styles.behaviorNote}>{entry.note}</Text>
                            )}
                        </View>
                    ))}
                </View>
                <TouchableOpacity
                    style={[styles.plusButton, styles.plusButtonData]}
                    onPress={onPress}
                >
                    <PlusSVG width={20} height={20} />
                </TouchableOpacity>
            </View>
        );
    }

    return null;
};

export default Section;

const styles = StyleSheet.create({
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 10,
    },
    lockContainer: {
        height: 195,
        borderRadius: 15,
        backgroundColor: '#303263',
        paddingVertical: 14,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionIcon: {
        marginBottom: 16,
    },
    sectionEmptyText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 12,
    },
    plusButton: {
        width: 46,
        height: 46,
        borderRadius: 164,
        backgroundColor: '#6C6FCB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusButtonData: {
        alignSelf: 'flex-end',
        marginTop: 10,
    },
    photosContainer: {
        flexDirection: 'row',
    },
    photoItem: {
        width: 114,
        height: 126,
        borderRadius: 12,
    },
    growthContainer: {
        paddingVertical: 14,
    },
    growthEntry: {
        marginBottom: 12,
    },
    growthEntryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    growthDate: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.5)',
    },
    growthMeasurement: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
    },
    growthNote: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
    },
    behaviorContainer: {
        paddingVertical: 14,
    },
    behaviorEntry: {
        marginBottom: 12,
    },
    behaviorDate: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.5)',
        marginBottom: 8,
    },
    behaviorNote: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
    },
});
