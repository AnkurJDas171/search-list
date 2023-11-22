import React from "react";
import { render } from "@testing-library/react-native";

import mockLIstData from "../../__mock__/data/ListData";
import AppList from "../../../src/components/AppList";
import * as hooks from "../../../src/hooks/reduxHooks";
import { ReactTestInstance } from "react-test-renderer";
import { ListItemData } from "../../../src/store/state/type";
import { testID } from "../../../src/assets/Constants";

jest.mock("../../../src/hooks/reduxHooks", () => ({
    useAppDispatch: jest.fn(),
    useAppSelector: jest.fn(),
}))

describe("List component", () => {
    beforeEach(()=>{
        jest.resetAllMocks();
    })

    it("should render if list data is present", async () => {
        jest.spyOn(hooks, 'useAppSelector').mockReturnValue(mockLIstData);

        const screen = render(<AppList/>);
        const list = await screen.findByTestId(testID.APP_LIST);
        
        expect(list).toBeTruthy()

        const listItems: ReactTestInstance[] = [];
        mockLIstData.forEach((item: ListItemData) => {
            listItems.push(
                screen.getByText(item.name)
            );
        })

        listItems?.forEach((item: ReactTestInstance) => {
            expect(item).toBeTruthy();
        })
    })

    it("should render if list data is empty", async () => {
        jest.spyOn(hooks, 'useAppSelector').mockReturnValue([]);

        const screen: any = render(<AppList/>).toJSON();
        expect(screen?.children).toBeNull();
    })
})
