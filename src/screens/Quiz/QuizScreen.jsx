import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QuizHeader from '../../components/Quiz/QuizHeader';
import QuizButton from '../../components/Quiz/QuizButton';

export default function QuizScreen() {
    const navigation = useNavigation();
    const handleBackPress = () => navigation.goBack();
    const handleSettingsPress = () => navigation.navigate('Settings');
    const handleStartQuiz = () => navigation.navigate('QuizQuestions');

    return (
        <SafeAreaView style={styles.container}>
            <QuizHeader onBackPress={handleBackPress} onSettingsPress={handleSettingsPress} />
            <View style={styles.content}>
                <Image source={require('../../assets/quiz/animals.png')} style={styles.image} />
                <QuizButton onPress={handleStartQuiz} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26284D',
        paddingTop: 5,
    },
    content: {
        alignItems: 'center',
        marginTop: 80,
    },
    image: {
        marginBottom: 114,
        resizeMode: 'contain',
    },
});
