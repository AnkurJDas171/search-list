import React from "react";
import { render } from "@testing-library/react-native";

import AppListItem from "../../../src/components/AppListItem";
import mockLIstData from "../../__mock__/data/ListData";

describe("List Item", () => {
    it("should render list item data", () => {
        const screen = render(
            <AppListItem
                containerColor={"#eee"}
                data={mockLIstData[0]}
                rank={1}
                textColor={"#000"}
            />
        )
        const text = screen.getByText(mockLIstData[0].name);

        expect(screen.toJSON()).toMatchSnapshot();
        expect(text).toBeTruthy();
    })
})
