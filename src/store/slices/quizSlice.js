import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [
        {
            id: '1',
            question: 'What is the largest animal on the planet?',
            answers: ['African elephant', 'Blue whale', 'Giraffe', 'Polar bear'],
            correctAnswerIndex: 2,
        },
        {
            id: '2',
            question: 'Which of these animals can change the color of its skin?',
            answers: ['Lizard', 'Chameleon', 'Hare', 'Bird'],
            correctAnswerIndex: 2,
        },
        {
            id: '3',
            question: 'Which animal is a symbol of wisdom?',
            answers: ['Owl', 'Eagle', 'Dolphin', 'Lion'],
            correctAnswerIndex: 1,
        },
        {
            id: '4',
            question: 'What mammal can fly?',
            answers: ['Bat', 'Squirrel', 'Squirrel', 'Kangaroo'],
            correctAnswerIndex: 1,
        },
        {
            id: '5',
            question: 'What mammal can fly?',
            answers: ['Cheetah', 'Horse', 'Hare', 'Sheep'],
            correctAnswerIndex: 1,
        },
        {
            id: '6',
            question: 'Which animal can live the longest without water?',
            answers: ['Elephant', 'Lion', 'Kangaroo', 'Camel'],
            correctAnswerIndex: 4,
        },
        {
            id: '7',
            question: 'Which of these animals is the largest land predator?',
            answers: ['Lion', 'Tiger', 'Polar bear', 'Grizzly bear'],
            correctAnswerIndex: 3,
        },
    ],
    currentQuestionIndex: 0,
    userAnswers: {},
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        selectAnswer(state, action) {
            const { questionId, answerIndex } = action.payload;
            state.userAnswers[questionId] = answerIndex;
        },
        nextQuestion(state) {
            if (state.currentQuestionIndex < state.questions.length - 1) {
                state.currentQuestionIndex += 1;
            }
        },
        resetQuiz(state) {
            state.currentQuestionIndex = 0;
            state.userAnswers = {};
        },
    },
});

export const { selectAnswer, nextQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
