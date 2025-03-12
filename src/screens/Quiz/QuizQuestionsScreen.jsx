import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { nextQuestion, selectAnswer } from '../../store/slices/quizSlice';

import ProgressBar from '../../components/Quiz/ProgressBar';
import AnswerCard from '../../components/Quiz/AnswerCard';
import FinalModal from '../../components/Quiz/FinalModal';
import BackHeader from '../../components/BackHeader';

export default function QuizQuestionsScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { questions, currentQuestionIndex, userAnswers } = useSelector((state) => state.quiz);
    const question = questions[currentQuestionIndex];
    const selectedAnswerIndex = userAnswers[question.id];
    const correctIndex = question.correctAnswerIndex;

    const totalQuestions = questions.length;
    const currentNumber = currentQuestionIndex + 1;

    const [highlightedIndex, setHighlightedIndex] = useState(null);
    const [answerRevealed, setAnswerRevealed] = useState(false);

    const [showFinalModal, setShowFinalModal] = useState(false);

    const handleAnswerPress = (index) => {
        setHighlightedIndex(index);
        dispatch(selectAnswer({ questionId: question.id, answerIndex: index }));

        setTimeout(() => {
            setAnswerRevealed(true);
        }, 1000);

        setTimeout(() => {
            if (currentQuestionIndex < totalQuestions - 1) {
                setHighlightedIndex(null);
                setAnswerRevealed(false);
                dispatch(nextQuestion());
            } else {
                setShowFinalModal(true);
            }
        }, 5000);
    };

    const handleCloseModal = () => {
        setShowFinalModal(false);
        navigation.navigate('Quiz');
    };

    return (
        <SafeAreaView style={styles.container}>
            <BackHeader title="Quiz" />
            <View style={styles.content}>
                <ProgressBar current={currentNumber} total={totalQuestions} />
                <Text style={styles.questionText}>{question.question}</Text>

                {question.answers.map((answer, index) => (
                    <AnswerCard
                        key={index}
                        index={index}
                        answer={answer}
                        onPress={handleAnswerPress}
                        disabled={selectedAnswerIndex !== undefined}
                        highlightedIndex={highlightedIndex}
                        answerRevealed={answerRevealed}
                        selectedAnswerIndex={selectedAnswerIndex}
                        correctIndex={correctIndex}
                    />
                ))}
            </View>

            <FinalModal
                visible={showFinalModal}
                onClose={handleCloseModal}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26284D',
    },
    content: {
        marginTop: 26,
        paddingHorizontal: 20,
        flex: 1,
    },
    questionText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '700',
        fontSize: 25,
        color: '#FFFFFF',
        marginBottom: 26,
    },
});
