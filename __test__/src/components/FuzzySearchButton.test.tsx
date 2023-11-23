import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import FuzzySearchButton from "../../../src/components/FuzzySearchButton";
import * as hooks from "../../../src/hooks/reduxHooks";
import { ALERT_MESSAGE, testID } from "../../../src/assets/Constants";
import * as listActions from "../../../src/store/slice/list.slice";
import * as alertActions from "../../../src/store/slice/alert.slice";
import mockUsersdata from "../../__mock__/data/UsersData";

jest.mock("../../../src/hooks/reduxHooks", () => ({
    useAppDispatch: jest.fn(() => () => { }),
    useAppSelector: jest.fn()
}))

jest.mock("../../../src/store/slice/list.slice", () => ({
    getFuzzyMatchedList: jest.fn(),
    clearList: jest.fn()
}))

jest.mock("../../../src/store/slice/alert.slice", () => ({
    setAlert: jest.fn()
}))

describe("Fuzzy match button", () => {
    it("should render the button", async () => {
        const screen = render(
            <FuzzySearchButton
                searchedName="sample name"
            />
        )

        const button = await screen.findByTestId(testID.APP_BUTTON);

        expect(screen.toJSON()).toMatchSnapshot();
        expect(button).toBeTruthy();
    })

    it("should call getFuzzyMatchedList method on button press when searched name is partially mathed in user data", async () => {
        jest.spyOn(hooks, 'useAppSelector').mockReturnValue(mockUsersdata);
        jest.spyOn(listActions, 'getFuzzyMatchedList');

        const screen = render(
            <FuzzySearchButton
                searchedName="Rica"
            />
        )

        const button = await screen.findByTestId(testID.APP_BUTTON);

        fireEvent.press(button);

        expect(listActions.getFuzzyMatchedList).toHaveBeenCalled();
    })

    it("should call clearList and setAlert methods on button press when searched name does not match with user data", async () => {
        jest.spyOn(hooks, 'useAppSelector').mockReturnValue(mockUsersdata);
        jest.spyOn(listActions, 'clearList');
        jest.spyOn(alertActions, 'setAlert');

        const screen = render(
            <FuzzySearchButton
                searchedName="hello world"
            />
        )

        const button = await screen.findByTestId(testID.APP_BUTTON);

        fireEvent.press(button);

        expect(listActions.clearList).toHaveBeenCalled();
        expect(alertActions.setAlert).toHaveBeenLastCalledWith(ALERT_MESSAGE);
    })
})
