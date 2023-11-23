import React from "react";

import AppButton from "../UI/AppButton";
import colors from "../assets/colors";
import { isUserPresent } from "../utils";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { RootState } from "../store";
import { UserState } from "../store/state/type";
import { clearList, getList } from "../store/slice/list.slice";
import { setAlert } from "../store/slice/alert.slice";
import { SearchBarButtonType } from "./types";
import { ALERT_MESSAGE } from "../assets/Constants";
import { StyleSheet } from "react-native";

const SearchButton = ({
    searchedName
}: SearchBarButtonType): JSX.Element => {
    const users = useAppSelector((state: RootState): UserState => state.users);
    const dispatch = useAppDispatch();

    const handlePress = (): void => {
        if (isUserPresent(searchedName, users)) {
            const payload = {
                users,
                searchedName
            }
            dispatch(getList(payload))
        } else {
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
            title={"Search"}
            titleColor={"white"}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: 'auto'
    }
})

export default SearchButton;
