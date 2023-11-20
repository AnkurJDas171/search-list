import React from "react";
import { ListItem } from "@rneui/themed";
import { AppTextContrainerProps } from "./types";
import { StyleSheet } from "react-native";
import colors from "../assets/colors";

const AppTextContainer = ({
    title,
    textColor = colors.BLACK,
}: AppTextContrainerProps): JSX.Element => {
    return (
        <ListItem
            style={styles.container}
            containerStyle={{ backgroundColor: colors.TRANSPARENT }}
        >
            <ListItem.Title 
                style={[styles.text, { color: textColor }]}
                testID="app-text-container"
            >
                {`${title}`}
            </ListItem.Title>
        </ListItem>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '25%',
    },
    text: {
        textAlign: 'left',
        fontSize: 12,
    }
})

export default AppTextContainer;
