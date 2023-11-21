import React from "react";
import { render } from "@testing-library/react-native";

import App from "../App";
import * as hooks from "../src/hooks";

jest.mock("../src/hooks", () => ({
    useAppDispatch: jest.fn(() => () => {}), 
    useAppSelector: jest.fn()
}))

describe("App component", () => {
    it("should render app component", () => {
        jest.spyOn(hooks, 'useAppSelector').mockReturnValue([]);

        const screen = render(<App/>)

        expect(screen.toJSON()).toMatchSnapshot();
        expect(screen).toBeTruthy();
    })
})
