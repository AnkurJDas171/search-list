import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";

import AppButton from "../../../src/UI/AppButton"

describe('App button', () => {
    it('should render button', async () => {
        const screen = render(
            <AppButton
                color={"#000"}
                handlePress={() => { }}
                isDisable={false}
                title={"search"}
                titleColor={"#fff"}
            />
        );

        expect(screen.toJSON()).toMatchSnapshot();

        const button = await screen.findByTestId("app-button");
        expect(button).not.toBeNull();
    });

    it('button press should work', async () => {
        const handlePress = () => {
            console.log("app button pressed");
        }
        jest.spyOn(console, 'log');

        const screen = render(
            <AppButton
                color={"#000"}
                handlePress={handlePress}
                isDisable={false}
                title={"search"}
                titleColor={"#fff"}
            />
        );

        const button = await screen.findByTestId("app-button");
        fireEvent.press(button);

        await expect(console.log).toHaveBeenCalledWith("app button pressed");
    })
})