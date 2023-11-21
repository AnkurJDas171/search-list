import React from "react";
import { render } from "@testing-library/react-native";

import Home from "../../../src/screens/Home";
import * as hooks from "../../../src/hooks";

jest.mock("../../../src/hooks", () => ({
    useAppDispatch: jest.fn(() => () => { }),
    useAppSelector: jest.fn()
}))

describe("Home component", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })

    it("should render the component", async () => {
        jest.spyOn(hooks, 'useAppSelector').mockReturnValue([]);

        const screen = render(<Home />);
        const screenComponent = await screen.findByTestId("app-home-screen");

        expect(screen.toJSON()).toMatchSnapshot();
        expect(screenComponent).toBeTruthy();
    })

    it("should show alert when seltAlert is true", () => {
        jest.spyOn(hooks, 'useAppSelector').mockReturnValue({
            showAlert: true,
            alertText: 'alert test'
        });

        const screen = render(<Home />);
        const alert = screen.findByText("alert test");

        expect(screen.toJSON()).toMatchSnapshot();
        expect(alert).toBeTruthy();
    })
})
