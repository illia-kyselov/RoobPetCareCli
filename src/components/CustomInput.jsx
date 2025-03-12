import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import InputCancelSVG from '../assets/paw/InputCancelSVG';

const CustomInput = ({
    style,
    placeholder,
    placeholderTextColor,
    value,
    onChangeText,
    multiline,
    ...rest
}) => {
    const handleClear = () => {
        onChangeText('');
    };

    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor || 'rgba(255,255,255,0.5)'}
                value={value}
                onChangeText={onChangeText}
                multiline={multiline}
                {...rest}
            />
            {value?.length > 0 && (
                <TouchableOpacity style={styles.iconContainer} onPress={handleClear}>
                    <InputCancelSVG />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        borderRadius: 15,
        backgroundColor: '#303263',
        marginBottom: 9,
    },
    input: {
        height: 47,
        borderRadius: 15,
        paddingVertical: 11,
        paddingHorizontal: 16,
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
    },
    iconContainer: {
        position: 'absolute',
        right: 16,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
    },
});

export default CustomInput;
