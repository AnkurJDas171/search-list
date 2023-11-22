import { PayloadAction } from "@reduxjs/toolkit";
import { UserDataType } from "../state/type";

const usersReducer = {
    getUsers: (_: UserDataType, action: PayloadAction<UserDataType>) => {
        return action.payload;
    }
}

export default usersReducer;
