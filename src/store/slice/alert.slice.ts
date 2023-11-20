import { createSlice } from "@reduxjs/toolkit";

import alertReducer from "../reducer/alertReducer";
import initialAlertState from "../state/Alert";
import { RootState } from "../";

const alertSlice = createSlice({
    name: 'alert',
    initialState: initialAlertState,
    reducers: alertReducer
});

export const { resetAlert, setAlert } = alertSlice.actions

export const selectCount = (state: RootState) => state.alert;

export default alertSlice.reducer;
