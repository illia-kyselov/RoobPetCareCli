import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StyleSheet,
    Switch,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { useDispatch } from 'react-redux';
import AddPhotoHeader from '../../components/Pets/AddPhotoHeader';
import CustomInput from '../../components/CustomInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import RemindModal from '../../components/Activity/RemindModal';
import {
    addFeedingAndActivitySchedule,
    updateFeedingAndActivitySchedule,
} from '../../store/slices/petCareSlice';

export default function AddActivitySecondScreen({ route, navigation }) {
    const scheduleToEdit = route.params.feedingSchedule;
    const petId = scheduleToEdit ? scheduleToEdit.petId : route.params.petId;
    const dispatch = useDispatch();

    const parseTime = (timeStr) => {
        const now = new Date();
        const [hours, minutes] = timeStr.split(':').map(Number);
        now.setHours(hours, minutes, 0, 0);
        return now;
    };

    const [morningFeed, setMorningFeed] = useState(
        scheduleToEdit ? scheduleToEdit.morningFeedAmount : ''
    );
    const [eveningFeed, setEveningFeed] = useState(
        scheduleToEdit ? scheduleToEdit.eveningFeedAmount : ''
    );
    const [notification, setNotification] = useState(
        scheduleToEdit ? scheduleToEdit.notification : false
    );
    const [morningDate, setMorningDate] = useState(
        scheduleToEdit ? parseTime(scheduleToEdit.morningFeedingTime) : new Date()
    );
    const [eveningDate, setEveningDate] = useState(
        scheduleToEdit ? parseTime(scheduleToEdit.eveningFeedingTime) : new Date()
    );
    const [isRemindModalVisible, setRemindModalVisible] = useState(false);
    const [selectedRemind, setSelectedRemind] = useState(
        scheduleToEdit ? scheduleToEdit.remind : null
    );

    const remindOptions = [
        { id: 1, label: 'An hour before' },
        { id: 2, label: 'Half an hour before' },
        { id: 3, label: '15 minutes before' },
        { id: 4, label: '5 minutes before' },
    ];

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleDonePress = () => {
        if (!morningFeed || !eveningFeed || !morningDate || !eveningDate) {
            return;
        }

        const morningHours = morningDate.getHours();
        const morningMinutes = morningDate.getMinutes();
        const eveningHours = eveningDate.getHours();
        const eveningMinutes = eveningDate.getMinutes();

        const formatTime = (hours, minutes) =>
            `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

        const feedingData = {
            petId,
            morningFeedingTime: formatTime(morningHours, morningMinutes),
            morningFeedAmount: morningFeed,
            eveningFeedingTime: formatTime(eveningHours, eveningMinutes),
            eveningFeedAmount: eveningFeed,
            notification,
            remind: selectedRemind,
        };

        if (scheduleToEdit) {
            dispatch(updateFeedingAndActivitySchedule({ id: scheduleToEdit.id, ...feedingData }));
        } else {
            dispatch(addFeedingAndActivitySchedule(feedingData));
        }
        navigation.replace('IndividualFeeding');
    };

    const doneButtonActive = Boolean(morningFeed && eveningFeed && morningDate && eveningDate);

    const onMorningChange = (event, selectedDate) => {
        if (selectedDate) {
            setMorningDate(selectedDate);
        }
    };

    const onEveningChange = (event, selectedDate) => {
        if (selectedDate) {
            setEveningDate(selectedDate);
        }
    };

    const handleReset = () => {
        setSelectedRemind(null);
    };

    return (
        <SafeAreaView style={styles.container}>
            <AddPhotoHeader
                title="Feeding and activity schedule"
                onBackPress={handleBackPress}
                onDonePress={handleDonePress}
                doneButtonActive={doneButtonActive}
            />

            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                <View style={{ marginHorizontal: 20, marginTop: 28 }}>
                    <Text style={styles.label}>Morning feeding time</Text>
                    <View style={styles.timeWheel}>
                        <DateTimePicker
                            value={morningDate}
                            mode="time"
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            onChange={onMorningChange}
                            style={styles.inlinePicker}
                            textColor="#FFF"
                        />
                    </View>

                    <Text style={styles.label}>Amount of morning feed</Text>
                    <CustomInput
                        placeholder="Amount of morning feed (g)"
                        value={morningFeed}
                        onChangeText={setMorningFeed}
                        style={{ marginBottom: 24 }}
                    />

                    <Text style={styles.label}>Evening feeding time</Text>
                    <View style={styles.timeWheel}>
                        <DateTimePicker
                            value={eveningDate}
                            mode="time"
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            onChange={onEveningChange}
                            style={styles.inlinePicker}
                            textColor="#FFF"
                        />
                    </View>

                    <Text style={styles.label}>Amount of evening feed</Text>
                    <CustomInput
                        placeholder="Amount of evening feed (g)"
                        value={eveningFeed}
                        onChangeText={setEveningFeed}
                        style={{ marginBottom: 26 }}
                    />

                    <View style={[styles.notificationContainer, { marginBottom: 5 }]}>
                        <Text style={styles.notificationText}>Notification</Text>
                        <Switch value={notification} onValueChange={setNotification} />
                    </View>

                    <Text style={styles.whenToRemind}>When to remind?</Text>
                    <View style={styles.reminderRow}>
                        <Text style={styles.timeText}>Time</Text>
                        <TouchableOpacity onPress={() => setRemindModalVisible(true)}>
                            <Text style={styles.chooseText}>Choose</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <RemindModal
                isVisible={isRemindModalVisible}
                onClose={() => setRemindModalVisible(false)}
                onReset={handleReset}
                remindOptions={remindOptions}
                selectedRemind={selectedRemind}
                setSelectedRemind={setSelectedRemind}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26284D',
    },
    label: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 8,
    },
    timeWheel: {
        height: 178,
        backgroundColor: '#303263',
        borderRadius: 15,
        marginBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inlinePicker: {
        height: 178,
    },
    notificationContainer: {
        height: 47,
        backgroundColor: '#434583',
        borderRadius: 15,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    notificationText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 17,
        color: '#FFFFFF',
    },
    whenToRemind: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 11,
        color: '#FFFFFF',
        marginBottom: 10,
        marginTop: 10,
    },
    reminderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    timeText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '700',
        fontSize: 14,
        color: '#FFFFFF',
    },
    chooseText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '700',
        fontSize: 16,
        color: '#6C6FCB',
    },
});
