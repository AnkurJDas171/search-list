import React from "react";
import { render } from "@testing-library/react-native";

import AppListItem from "../../../src/components/AppListItem";
import mockUsersdata from "../../__mock__/data/UsersData";

describe("List Item", () => {
    it("should render list item data", () => {
        const screen = render(
            <AppListItem
                containerColor={"#eee"}
                data={mockUsersdata[0]}
                textColor={"#000"}
            />
        )
        const text = screen.getByText(mockUsersdata[0].name);

        expect(screen.toJSON()).toMatchSnapshot();
        expect(text).toBeTruthy();
    })
})
