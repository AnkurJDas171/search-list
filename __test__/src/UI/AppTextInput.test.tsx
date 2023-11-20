import React from "react";
import { render } from "@testing-library/react-native";

import AppTextInput from "../../../src/UI/AppTextInput";
import SearchIcon from "../../../src/assets/icons/Search";

describe("Text Input", ()=>{
    it("should render text input", async () => {
        const icon = <SearchIcon height="40" width="40" />;

        const screen = render(
            <AppTextInput
                handleTextChange={()=>{}}
                icon={icon}
                placeholder={"sample text"}
            />
        )
        
        expect(screen.toJSON()).toMatchSnapshot();

        const textInput = await screen.findByTestId("app-text-input");
        expect(textInput).not.toBeNull();
    })
})
