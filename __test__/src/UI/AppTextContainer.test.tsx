import React from "react";
import { render } from "@testing-library/react-native";
import AppTextContainer from "../../../src/UI/AppTextContainer";

describe("Text Container", () => {
    it("should render the text container", async () => {
        const screen = render(
            <AppTextContainer
                title={"sample text"}
                textColor={"#000"}
            />
        )

        const text = await screen.findByTestId("app-text-container");
        expect(text.children).toContain("sample text");
    })
})
