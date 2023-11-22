import alertReducer from "../../../../src/store/reducer/alertReducer"
import { ALERT_MESSAGE } from "../../../../src/assets/Constants";
import { AlertType } from "../../../../src/store/state/type";

describe("Alert reducer", () => {
    it("setAlert should return an object containing showAlert as true and alertText message", ()=> {
        const initialState = {
            showAlert: false,
            alertText: ""
        }
        
        const action = {
            payload: ALERT_MESSAGE,
            type: 'alert'
        }

        const result = alertReducer.setAlert(initialState, action);

        expect(result.showAlert).toBe(true);
        expect(result.alertText).toBe(ALERT_MESSAGE);
    });

    it("resetAlert should return an object containing showAlert as false and alertText as empty string", ()=> {
        const result = alertReducer.resetAlert();

        expect(result.showAlert).toBe(false);
        expect(result.alertText).toBe("");
    });
});
