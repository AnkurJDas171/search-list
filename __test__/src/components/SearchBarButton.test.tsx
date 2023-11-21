import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import SearchBarButton from "../../../src/components/SearchBarButton";
import mockUsersdata from "../../__mock__/data/UsersData";
import * as hooks from "../../../src/hooks";

jest.mock("../../../src/hooks", () => ({
    useAppDispatch: jest.fn(() => () => {}), 
    useAppSelector: jest.fn()
}))

describe("Search bar buttton", () => {
    it("should render button", () => {
        const screen = render(
            <SearchBarButton
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
            <SearchBarButton
                searchedName={"testName"}
            />
        )
        const button = await screen.findByTestId("app-button");
        
        fireEvent.press(button);

        expect(button).toBeTruthy();
        expect(hooks.useAppDispatch).toHaveBeenCalled();
    })
})
