import { PayloadAction } from "@reduxjs/toolkit";
import { ListItemData, UserDataType, UserState } from "../state/type";

const usersReducer = {
    getUsers: (_: UserState, action: PayloadAction<UserDataType>) => {
        const usersData = Object.keys(action.payload)
            .map((key:string) => {
                const newUser = {
                    ...action.payload[key],
                    isSearched: false
                }

                return newUser;
            }).sort((firstItem: ListItemData, secondItem: ListItemData): number => {
                if(secondItem.bananas === firstItem.bananas){
                    return firstItem.name.localeCompare(secondItem.name);
                }
                return secondItem.bananas - firstItem.bananas;
            }).filter((users: ListItemData) => (users.name.length > 0))    

        usersData.forEach((users: ListItemData, index: number) => {
            users.rank = index + 1;
        })

        return usersData;
    }
}

export default usersReducer;
