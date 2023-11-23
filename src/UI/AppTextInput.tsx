import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "@rneui/themed";

import { AppTextInputProps } from "./types";
import colors from "../assets/colors";
import { height } from "../utils";
import { testID } from "../assets/Constants";


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
            testID={testID.APP_TEXT_INPUT}
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
        width: '45%',
        height: height(40)
    },
    inputContainer: {
        borderBottomWidth: 0,
    }
})

export default AppTextInput;
