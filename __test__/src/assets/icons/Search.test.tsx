import React from "react";
import { render } from "@testing-library/react-native";

import SearchIcon from "../../../../src/assets/icons/Search";

describe("Saerch icon", () => {
    it("should render seaerch icon", () => {
        const screen = render(
            <SearchIcon
                height="20"
                width="20"
            />
        )

        expect(screen.toJSON()).toMatchSnapshot();
        expect(screen).toBeTruthy();
    })
})
