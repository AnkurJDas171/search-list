import alertReducer from "../../../../src/store/reducer/alertReducer"
import { ALERT_MESSAGE } from "../../../../src/assets/Constants";

describe("Alert reducer", () => {
    it("setAlert should return an object containing showAlert as true and alertText message", ()=> {
        const result = alertReducer.setAlert();

        expect(result.showAlert).toBe(true);
        expect(result.alertText).toBe(ALERT_MESSAGE);
    });

    it("resetAlert should return an object containing showAlert as false and alertText as empty string", ()=> {
        const result = alertReducer.resetAlert();

        expect(result.showAlert).toBe(false);
        expect(result.alertText).toBe("");
    });
});
