import { PayloadAction } from "@reduxjs/toolkit";
import { LIST_LENGTH } from "../../assets/Constants";
import { GetListActionType } from "../action";
import { ListItemData, ListState, UserState, UserType } from "../state/type";
import { isStringPresent } from "../../utils";

const listReducer = {
    getList: (_: ListState, action: PayloadAction<GetListActionType>) => {
        const { users, searchedName } = action.payload;
        let isNamePresent = false;

        const list = users.slice(0, LIST_LENGTH);
        const newList = list.map((user: ListItemData) => {
            const newUser = {...user};
            const isPreset = isStringPresent(user.name, searchedName);

            if(isPreset) {
                newUser.isSearched = isPreset;
                isNamePresent = isPreset;
            }

            return newUser;
        })

        if (!isNamePresent) {
            users.forEach((user: ListItemData) => {
                if (isStringPresent(user.name, searchedName)) {
                    newList[LIST_LENGTH - 1] = {
                        ...user,
                        isSearched: true
                    }

                    return;
                }
            })
        }

        return newList;

        // if (users !== null) {
        //     let isNamePresent = false;
        //     const usersList = Object.keys(users)
        //         .map((key: string): ListItemData => {
        //             const newEntry = {
        //                 ...users[key],
        //                 isSearched: isStringPresent(users[key].name, searchedName)
        //             };

        //             return newEntry;
        //         })
        //         .sort((firstItem: ListItemData, secondItem: ListItemData): number => {
        //             if(secondItem.bananas === firstItem.bananas){
        //                 return firstItem.name.localeCompare(secondItem.name);
        //             }
        //             return secondItem.bananas - firstItem.bananas;
        //         });

        //     usersList.forEach((user: ListItemData, index: number) => {
        //         user.rank = index + 1;
        //         if (user.isSearched) isNamePresent = true;
        //     })

        //     if (!isNamePresent) {
        //         Object.keys(users).forEach((key: string) => {
        //             if (isStringPresent(users[key].name, searchedName)) {
        //                 usersList[LIST_LENGTH - 1] = {
        //                     ...users[key],
        //                     isSearched: true
        //                 }

        //                 return;
        //             }
        //         })
        //     }

        //     return usersList
        // }
    },
    getListFromLowestRank: (_: ListState, action: PayloadAction<UserState>) => {
        const list = [...action.payload]
            .reverse()
            .sort((firstItem: ListItemData, secondItem: ListItemData): number => {
                if(firstItem.bananas === secondItem.bananas) {
                    return firstItem.name.localeCompare(secondItem.name);
                }

                return 0;
            });

        return list.slice(0, LIST_LENGTH);
    },
    sortList: (state: ListState) => {
        return state.sort((firstItem: ListItemData, secondItem: ListItemData): number => {
            return firstItem.name.localeCompare(secondItem.name);
        });
    },
    clearList: () => {
        return [];
    }
}

export default listReducer;
