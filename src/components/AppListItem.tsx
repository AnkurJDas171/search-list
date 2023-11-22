import React from "react";
import { StyleSheet, View } from "react-native";

import { AppListItemProps } from "./types";
import AppTextContainer from "../UI/AppTextContainer";
import colors from "../assets/colors";

const AppListItem = ({
    data,
    containerColor,
    textColor = colors.BLACK
}: AppListItemProps): JSX.Element => {
    return (
        <View style={[styles.body, { backgroundColor: containerColor }]}>
            <AppTextContainer title={data.name} textColor={textColor} />
            <AppTextContainer title={data.rank} textColor={textColor} />
            <AppTextContainer title={data.bananas} textColor={textColor} />
            <AppTextContainer title={data.isSearched} textColor={textColor} />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }
})

export default AppListItem;
