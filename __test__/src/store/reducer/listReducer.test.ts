import { LIST_LENGTH } from "../../../../src/assets/Constants";
import listReducer from "../../../../src/store/reducer/listReducer"
import { ListItemData, ListState } from "../../../../src/store/state/type"
import mockLIstData, { expectedLowestRankValues, expectedSortedValues } from "../../../__mock__/data/ListData";
import mockUsersdata from "../../../__mock__/data/UsersData"
import { compareObjectData } from "../../../__mock__/utils";

const positionOfTheUser = (name: string, list: ListState | undefined): number => {
    let position = 0;
    list?.forEach((item: ListItemData, index: number): void => {
        if (item.name.includes(name)) {
            position = index + 1;
            return;
        }
    })

    return position;
}

describe("List reducer", () => {
    it("getList should return a list conatining the searched user in within the top ten position", () => {
        const name = "Wolfgang";
        const action = {
            payload: {
                users: mockUsersdata,
                searchedName: name
            },
            type: "list"
        }
        const list = listReducer.getList([], action);
        const result = positionOfTheUser(name, list);

        expect(result).not.toBe(0);
        expect(result).toBeLessThan(LIST_LENGTH);
    })


    it("getList should return a list conatining the searched user not present in top ten position moved to tenth position", () => {
        const name = "Safwan"
        const action = {
            payload: {
                users: mockUsersdata,
                searchedName: name
            },
            type: "list"
        }
        const list = listReducer.getList([], action);
        const result = positionOfTheUser(name, list);

        expect(result).not.toBe(0);
        expect(result).toBe(LIST_LENGTH);
    })

    it("getListFromLowestRank should return lowest ten users based on rank", () => {
        const action = {
            payload: mockUsersdata,
            type: "list"
        }

        const list = listReducer.getListFromLowestRank([], action);

        for (let i = 0; i < list.length; i++) {
            const isMatched = compareObjectData(expectedLowestRankValues[i], list[i])
            
            expect(isMatched).toBe(true);
        }
    })

    it("sortList should sort the list alphabetically", () => {
        const state = mockLIstData;
        const list  = listReducer.sortList(state);

        for (let i = 0; i < list.length; i++) {
            const isMatched = compareObjectData(expectedSortedValues[i], list[i])
            
            expect(isMatched).toBe(true);
        }
    })
})
