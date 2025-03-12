import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PlaySVG from '../../assets/quiz/PlaySVG';

const QuizButton = ({ onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <PlaySVG />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        backgroundColor: '#6C6FCB',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingLeft: 30,
        paddingRight: 18,
    },
});

export default QuizButton;
