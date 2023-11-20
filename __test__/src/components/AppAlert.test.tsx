import { render } from "@testing-library/react-native";
import React from "react";
import AppAlert from "../../../src/components/AppAlert";
import * as hooks from "../../../src/hooks";

jest.mock("../../../src/hooks", () => ({
    useAppDispatch: jest.fn(),
    useAppSelector: jest.fn(),
}))

describe('Alert component', () => {
    beforeEach(()=>{
        jest.resetAllMocks();
    })

    it("should render Alert when showAlert state is true", () => {
        jest.spyOn(hooks, 'useAppSelector').mockReturnValue({
            showAlert: true,
            alertText: 'alert test'
        })

        const screen = render(
            <AppAlert />
        )

        expect(screen.toJSON()).toMatchSnapshot();
    });

    it("should not render Alert is showAlert state is false", () => {
        jest.spyOn(hooks, 'useAppSelector').mockReturnValue({
            showAlert: false,
            alertText: 'alert test'
        });

        const screen = render(
            <AppAlert />
        )

        expect(screen.toJSON()).toMatchSnapshot();
    });
})
