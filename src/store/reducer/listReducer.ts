import { PayloadAction } from "@reduxjs/toolkit";
import { LIST_LENGTH } from "../../assets/Constants";
import { GetListActionType } from "../action";
import { ListItemData, ListType } from "../state/type";

const isStringPresent = (str: string, subStr: string): boolean => {
    if(!str) return false;

    return str.toLocaleLowerCase()
        .includes(subStr.toLocaleLowerCase());
}

const listReducer = {
    getList: (state: ListType, action: PayloadAction<GetListActionType>) => {
        const { users, searchedName } = action.payload;

        if (users !== null) {
            let isNamePresent = false;
            const usersList = Object.keys(users)
                .map((key: string): ListItemData => {
                    const newEntry = {
                        ...users[key],
                        isSearched: isStringPresent(users[key].name, searchedName)
                    };

                    return newEntry;
                })
                .sort((firstItem: ListItemData, secondItem: ListItemData): number => {
                    return secondItem.bananas - firstItem.bananas;
                }).slice(0, LIST_LENGTH);

            usersList.forEach((user: ListItemData) => {
                if (user.isSearched) isNamePresent = true;
            })

            if (!isNamePresent) {
                Object.keys(users).forEach((key: string) => {
                    if (isStringPresent(users[key].name, searchedName)) {
                        usersList[LIST_LENGTH - 1] = {
                            ...users[key],
                            isSearched: true
                        }

                        return;
                    }
                })
            }

            return usersList
        }
    },
    clearList: () => {
        return [];
    }
}

export default listReducer;
