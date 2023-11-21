import React from "react";
import { render } from "@testing-library/react-native";

import AppListTitle from "../../../src/components/AppListTitle";
import { ReactTestInstance } from "react-test-renderer";
import { LIST_TITLES } from "../../../src/assets/Constants";

describe("List title component", () => {
    it("should render list title component", () => {
        const screen = render(<AppListTitle/>)
        const titles: ReactTestInstance[] = [];
        
        LIST_TITLES.forEach((title: string) => {
            titles.push(screen.getByText(title));
        })

        expect(screen.toJSON()).toMatchSnapshot();
        titles.forEach((title: ReactTestInstance) => {
            expect(title).toBeTruthy();
        })
    })
})
