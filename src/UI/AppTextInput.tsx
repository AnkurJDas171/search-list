import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "@rneui/themed";

import { AppTextInputProps } from "./types";
import colors from "../assets/colors";


const AppTextInput = ({
    handleTextChange,
    icon,
    placeholder,
    value
}: AppTextInputProps): JSX.Element => {
    return (
        <Input
            containerStyle={styles.container}
            inputContainerStyle={styles.inputContainer}
            onChangeText={handleTextChange}
            placeholder={placeholder}
            leftIcon={icon}
            testID="app-text-input"
            value={value}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.TEXT_INPUT,
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        width: '55%',
    },
    inputContainer: {
        borderBottomWidth: 0,
    }
})

export default AppTextInput;
