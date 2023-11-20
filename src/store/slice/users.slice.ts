import { createSlice } from "@reduxjs/toolkit";

import usersReducer from "../reducer/usersReducer";
import initialUsersState from "../state/Users";
import { RootState } from "../";

const usersSlice = createSlice({
    name: 'users',
    initialState: initialUsersState,
    reducers: usersReducer
})

export const { getUsers } = usersSlice.actions;

export const selectCount = (state: RootState) => state.users;

export default usersSlice.reducer;
