import React from "react";
import { act, fireEvent, render } from "@testing-library/react-native";

import AppTextInput from "../../../src/UI/AppTextInput";
import SearchIcon from "../../../src/assets/icons/Search";
import { waitAMoment } from "../../__mock__/utils";

describe("Text Input", () => {
    it("should render text input", async () => {
        const icon = <SearchIcon height="40" width="40" />;

        const screen = render(
            <AppTextInput
                handleTextChange={() => { }}
                icon={icon}
                placeholder={"sample text"}
                value={"sample text"}
            />
        )
        const textInput = await screen.findByTestId("app-text-input");

        expect(screen.toJSON()).toMatchSnapshot();
        expect(textInput).toBeTruthy();
    })

    it("should be able to change text in search bar", async () => {
        const icon = <SearchIcon height="40" width="40" />;
        const handleTextChange = (value: string) => {
            console.log(value);
        };

        jest.spyOn(console, 'log');

        const screen = render(
            <AppTextInput
                handleTextChange={handleTextChange}
                icon={icon}
                placeholder={"sample text"}
                value={"sample text"}
            />
        );
        const textInput = await screen.findByTestId("app-text-input");

        fireEvent.changeText(textInput, "new sample text");

        expect(screen.toJSON()).toMatchSnapshot();
        expect(console.log).toHaveBeenCalledWith("new sample text");
    })
})
