import React from "react";
import { StyleSheet } from "react-native";

import AppButton from "../UI/AppButton";
import colors from "../assets/colors";
import { buttonTitles } from "../assets/Constants";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { sortList } from "../store/slice/list.slice";
import { RootState } from "../store";
import { ListState } from "../store/state/type";

const SortListButton = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const list = useAppSelector((state: RootState): ListState => state.list);

    const handlePress = (): void => {
        dispatch(sortList());
    }

    return (
        <AppButton
            color={colors.BUTTON}
            containerStyle={styles.container}
            handlePress={handlePress}
            isDisable={list.length === 0}
            title={buttonTitles.SORT_NAMES}
            titleColor={colors.WHITE}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: 'auto'
    }
})

export default SortListButton;
