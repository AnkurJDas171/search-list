import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import SortListButton from "../../../src/components/SortListButton";
import * as hooks from "../../../src/hooks/reduxHooks";
import { testID } from "../../../src/assets/Constants";
import * as listActions from "../../../src/store/slice/list.slice";
import mockLIstData from "../../__mock__/data/ListData";

jest.mock("../../../src/hooks/reduxHooks", () => ({
    useAppDispatch: jest.fn(() => () => { }),
    useAppSelector: jest.fn()
}))

jest.mock("../../../src/store/slice/list.slice", () => ({
    sortList: jest.fn()
}))

describe("Sort List Button", () => {
    it("should render button", async () => {
        jest.spyOn(hooks, 'useAppSelector').mockReturnValue(mockLIstData);
        const screen = render(<SortListButton />);
        const button = await screen.findByTestId(testID.APP_BUTTON);

        expect(screen).toMatchSnapshot();
        expect(button).toBeTruthy();
    })

    it("should trigger sortList method on button click", async () => {
        jest.spyOn(hooks, 'useAppSelector').mockReturnValue(mockLIstData);
        jest.spyOn(listActions, "sortList");

        const screen = render(<SortListButton />)
        const button = await screen.findByTestId(testID.APP_BUTTON);

        fireEvent.press(button);

        expect(listActions.sortList).toHaveBeenCalled();
    })
})
