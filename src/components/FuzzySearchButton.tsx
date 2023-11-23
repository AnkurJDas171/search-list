import React from "react";
import { StyleSheet } from "react-native";

import AppButton from "../UI/AppButton";
import colors from "../assets/colors";
import { ALERT_MESSAGE, buttonTitles } from "../assets/Constants";
import { FuzzySearchButtonType } from "./types";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { RootState } from "../store";
import { UserState } from "../store/state/type";
import { clearList, getFuzzyMatchedList } from "../store/slice/list.slice";
import { isUserPresentInFuzzyMatch } from "../utils";
import { setAlert } from "../store/slice/alert.slice";

const FuzzySearchButton = ({
    searchedName
}: FuzzySearchButtonType): JSX.Element => {
    const users = useAppSelector((state: RootState): UserState => state.users);
    const dispatch = useAppDispatch();

    const handlePress = (): void => {
        if(isUserPresentInFuzzyMatch(searchedName, users)){
            const payload = {
                searchedName,
                users
            }
            dispatch(getFuzzyMatchedList(payload))
        }else{
            dispatch(clearList());
            dispatch(setAlert(ALERT_MESSAGE));
        }
    }

    return (
        <AppButton
            color={colors.BUTTON}
            containerStyle={styles.container}
            handlePress={handlePress}
            isDisable={searchedName.length === 0}
            title={buttonTitles.FUZZY_SEARCH}
            titleColor={colors.WHITE}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: "auto"
    }
})

export default FuzzySearchButton
