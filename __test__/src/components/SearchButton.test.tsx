import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import SearchButton from "../../../src/components/SearchButton";
import mockUsersdata from "../../__mock__/data/UsersData";
import * as hooks from "../../../src/hooks/reduxHooks";
import { testID } from "../../../src/assets/Constants";

jest.mock("../../../src/hooks/reduxHooks", () => ({
    useAppDispatch: jest.fn(() => () => {}), 
    useAppSelector: jest.fn()
}))

describe("Search bar buttton", () => {
    it("should render button", () => {
        const screen = render(
            <SearchButton
                searchedName={""}
            />
        )
        const buttonText = screen.findByText("search");

        expect(screen.toJSON()).toMatchSnapshot();
        expect(buttonText).toBeTruthy();
    })

    it("button click should work", async () => {
        jest.spyOn(hooks, 'useAppSelector').mockReturnValue(mockUsersdata);
        jest.spyOn(hooks, 'useAppDispatch');

        const screen = render(
            <SearchButton
                searchedName={"testName"}
            />
        )
        const button = await screen.findByTestId(testID.APP_BUTTON);
        
        fireEvent.press(button);

        expect(button).toBeTruthy();
        expect(hooks.useAppDispatch).toHaveBeenCalled();
    })
})
