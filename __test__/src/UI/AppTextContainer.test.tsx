import React from "react";
import { render } from "@testing-library/react-native";

import AppTextContainer from "../../../src/UI/AppTextContainer";
import { testID } from "../../../src/assets/Constants";

describe("Text Container", () => {
    it("should render the text container", async () => {
        const screen = render(
            <AppTextContainer
                title={"sample text"}
                textColor={"#000"}
            />
        )

        const text = await screen.findByTestId(testID.APP_TEXT_CONTAINER);
        expect(text.children).toContain("sample text");
    })
})
