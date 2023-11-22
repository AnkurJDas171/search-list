import { createSlice } from "@reduxjs/toolkit";

import listReducer from "../reducer/listReducer";
import { RootState } from "../";
import initialListState from "../state/List";

const listSlice = createSlice({
    name: 'list',
    initialState: initialListState,
    reducers: listReducer
});

export const { clearList, getList, getListFromLowestRank, sortList } = listSlice.actions;

export const selectCount = (state: RootState) => state.list;

export default listSlice.reducer;
