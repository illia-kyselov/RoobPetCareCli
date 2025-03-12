import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DoneSVG from '../../assets/quiz/DoneSVG';
import MinusSVG from '../../assets/quiz/MinusSVG';

const AnswerCard = ({
    index,
    answer,
    onPress,
    disabled,
    highlightedIndex,
    answerRevealed,
    selectedAnswerIndex,
    correctIndex,
}) => {
    const getAnswerStyles = (index) => {
        let containerStyle = [styles.answerContainer];
        let letterCircleStyle = [styles.letterCircle];

        if (index === highlightedIndex && !answerRevealed) {
            containerStyle.push({ borderColor: '#FFFFFF' });
        }

        if (answerRevealed) {
            const isSelected = index === selectedAnswerIndex;
            const isCorrect = index === correctIndex;
            if (isSelected) {
                if (isCorrect) {
                    containerStyle.push({ borderColor: '#52FF2B' });
                    letterCircleStyle.push({ backgroundColor: '#52FF2B' });
                } else {
                    containerStyle.push({ borderColor: '#FF382B' });
                    letterCircleStyle.push({ backgroundColor: '#FF382B' });
                }
            }
        }
        return { containerStyle, letterCircleStyle };
    };

    const renderCircleContent = (index) => {
        if (answerRevealed && index === selectedAnswerIndex) {
            return index === correctIndex ? <DoneSVG /> : <MinusSVG />;
        } else {
            return (
                <Text style={styles.letterText}>
                    {String.fromCharCode(65 + index)}
                </Text>
            );
        }
    };

    const { containerStyle, letterCircleStyle } = getAnswerStyles(index);

    return (
        <TouchableOpacity
            style={containerStyle}
            onPress={() => onPress(index)}
            disabled={disabled}
        >
            <View style={styles.answerRow}>
                <View style={letterCircleStyle}>
                    {renderCircleContent(index)}
                </View>
                <Text style={styles.answerText}>{answer}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    answerContainer: {
        height: 76,
        borderRadius: 15,
        backgroundColor: '#303263',
        marginBottom: 6,
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 14,
        paddingRight: 14,
        justifyContent: 'center',
        borderWidth: 7,
        borderColor: 'transparent',
    },
    answerRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    letterCircle: {
        width: 40,
        height: 40,
        borderRadius: 200,
        backgroundColor: '#26284D',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    letterText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '800',
        fontSize: 14,
        color: '#FFFFFF',
    },
    answerText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 12,
        color: '#FFFFFF',
    },
});

export default AnswerCard;
