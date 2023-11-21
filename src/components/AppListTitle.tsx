import React from "react";
import { StyleSheet, View } from "react-native";

import AppTextContainer from "../UI/AppTextContainer";
import { LIST_TITLES } from "../assets/Constants";
import colors from "../assets/colors";

const AppListTitle = (): JSX.Element => {
    return (
        <View style={styles.body}>
            {LIST_TITLES.map((item: string) =>
                <AppTextContainer
                    title={item}
                    textColor={colors.WHITE}
                    key={item}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        backgroundColor: colors.LIST_TITLE,
        display: 'flex',
        flexDirection: 'row',
        height: '10%',
        justifyContent: 'center',
    }
})

export default AppListTitle;
