import React from "react";
import { StyleSheet } from "react-native";
import { Button } from '@rneui/themed';

import { AppButtonProps } from "./types";
import { testID } from "../assets/Constants";
import { fontSize } from "../utils";

const AppButton = ({
    color,
    containerStyle,
    handlePress,
    isDisable,
    title,
    titleColor,
}: AppButtonProps): JSX.Element => {
    return (
        <Button
            title={title}
            buttonStyle={[styles.button, { backgroundColor: color }]}
            titleStyle={[styles.title, { color: titleColor }]}
            containerStyle={[styles.container, containerStyle]}
            onPress={handlePress}
            disabled={isDisable}
            testID={testID.APP_BUTTON}
        />
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 5
    },
    container: {
        paddingVertical: 5,
        width: '30%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: fontSize(11)
    }
})

export default AppButton;
