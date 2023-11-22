import React from "react";
import { StyleSheet } from "react-native";

import AppButton from "../UI/AppButton";
import colors from "../assets/colors";
import { buttonTitles } from "../assets/Constants";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getListFromLowestRank } from "../store/slice/list.slice";
import { RootState } from "../store";
import { UserState } from "../store/state/type";

const ReverseListButton = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state: RootState): UserState => state.users);

    const handlePress = (): void => {
        dispatch(getListFromLowestRank(users));
    }

    return (
        <AppButton
            color={colors.BUTTON}
            containerStyle={styles.container}
            handlePress={handlePress}
            isDisable={false}
            title={buttonTitles.SHOW_LOWEST_RANKS}
            titleColor={colors.WHITE}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: 'auto'
    }
})

export default ReverseListButton;
