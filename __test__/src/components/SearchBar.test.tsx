import React from "react";
import { act, fireEvent, render, waitFor } from "@testing-library/react-native";

import SearchBar from "../../../src/components/SearchBar";
import { waitAMoment } from "../../__mock__/utils";

jest.mock("../../../src/hooks", () => ({
    useAppDispatch: jest.fn(() => () => { }),
    useAppSelector: jest.fn()
}))

describe("Search bar component", () => {
    it("should render search bar", async () => {
        const screen = render(<SearchBar />);
        const searchBar = await screen.findByTestId("app-search-bar");

        expect(screen.toJSON()).toMatchSnapshot();
        expect(searchBar).toBeTruthy();
    });

    it("should be able to change text in search bar", async () => {
        const screen = render(<SearchBar />);
        const textInput = await screen.findByTestId("app-text-input");

        await act(async ()=>{
            fireEvent.changeText(textInput, "sample text");
            await waitAMoment();
        })

        expect(screen.toJSON()).toMatchSnapshot();
        expect(textInput.props.value).toBe("sample text")
    })
})