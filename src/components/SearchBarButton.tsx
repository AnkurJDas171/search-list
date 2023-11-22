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

const SearchBarButton = ({
    searchedName
}: SearchBarButtonType): JSX.Element => {
    const users = useAppSelector((state: RootState): UserState => state.users);
    const dispatch = useAppDispatch();

    const handlePress = (): void => {
        if (isUserPresent(searchedName, users)) {
            const action = {
                users,
                searchedName
            }
            dispatch(getList(action))
        } else {
            dispatch(clearList());
            dispatch(setAlert(ALERT_MESSAGE));
        }
    }

    return (
        <AppButton
            color={colors.BUTTON}
            handlePress={handlePress}
            title={"Search"}
            titleColor={"white"}
            isDisable={searchedName.length === 0}
        />
    )
}

export default SearchBarButton;
