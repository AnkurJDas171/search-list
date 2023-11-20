import { ALERT_MESSAGE } from "../../assets/Constants";

const alertReducer = {
    setAlert: () => {
        return {
            showAlert: true,
            alertText: ALERT_MESSAGE
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
