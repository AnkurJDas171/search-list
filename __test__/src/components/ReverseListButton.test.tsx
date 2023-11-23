import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import ReverseListButton from "../../../src/components/ReverseListButton";
import * as hooks from "../../../src/hooks/reduxHooks";
import { testID } from "../../../src/assets/Constants";
import mockLIstData from "../../__mock__/data/ListData";
import * as listActions from "../../../src/store/slice/list.slice";

jest.mock("../../../src/hooks/reduxHooks", () => ({
    useAppDispatch: jest.fn(() => () => { }),
    useAppSelector: jest.fn()
}))

jest.mock("../../../src/store/slice/list.slice", () => ({
    getListFromLowestRank: jest.fn()
}))

describe("Reverse List Button", () => {
    it("should render the button", async () => {
        const screen = render(<ReverseListButton />)
        const button = await screen.findByTestId(testID.APP_BUTTON);

        expect(screen).toMatchSnapshot();
        expect(button).toBeTruthy();
    })

    it("should trigger getListFromLowestRank method on button click", async () => {
        jest.spyOn(hooks, 'useAppSelector').mockReturnValue(mockLIstData);
        jest.spyOn(listActions, "getListFromLowestRank");

        const screen = render(<ReverseListButton />)
        const button = await screen.findByTestId(testID.APP_BUTTON);

        fireEvent.press(button);

        expect(listActions.getListFromLowestRank).toHaveBeenCalled();
    })
})
