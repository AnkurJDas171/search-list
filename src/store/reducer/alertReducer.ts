import { PayloadAction } from "@reduxjs/toolkit";
import { AlertState } from "../state/type";

const alertReducer = {
    setAlert: (_: AlertState, action: PayloadAction<string>) => {
        return {
            showAlert: true,
            alertText: action.payload
        }
    },
    resetAlert: () => {
        return {
            showAlert: false,
            alertText: ""
        }
    }
}

export default alertReducer;
