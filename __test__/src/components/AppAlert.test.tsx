import React from "react";
import { render } from "@testing-library/react-native";

import AppAlert from "../../../src/components/AppAlert";
import * as hooks from "../../../src/hooks";

jest.mock("../../../src/hooks", () => ({
    useAppDispatch: jest.fn(),
    useAppSelector: jest.fn(),
}))

describe('Alert component', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })

    it("should render Alert when showAlert state is true", () => {
        jest.spyOn(hooks, 'useAppSelector').mockReturnValue({
            showAlert: true,
            alertText: 'alert test'
        })

        const screen = render(<AppAlert />)
        const text = screen.getByText('alert test')

        expect(screen.toJSON()).toMatchSnapshot();
        expect(text).toBeTruthy();
    });

    it("should not render Alert is showAlert state is false", () => {
        jest.spyOn(hooks, 'useAppSelector').mockReturnValue({
            showAlert: false,
            alertText: 'alert test'
        });

        const screen: any = render(<AppAlert />)

        expect(screen.toJSON()).toMatchSnapshot();
        expect(screen.toJSON().children).toBeNull()
    });
})
