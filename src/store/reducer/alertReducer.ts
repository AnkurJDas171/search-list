import { PayloadAction } from "@reduxjs/toolkit";
import { AlertType } from "../state/type";

const alertReducer = {
    setAlert: (_: AlertType, action: PayloadAction<string>) => {
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
