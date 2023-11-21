import { LIST_LENGTH } from "../../../../src/assets/Constants";
import listReducer from "../../../../src/store/reducer/listReducer"
import { ListItemData, ListType } from "../../../../src/store/state/type"
import mockUsersdata from "../../../__mock__/data/UsersData"

const positionOfTheUser = (name: string, list: ListType | undefined): number => {
    let position = 0;
    list?.forEach((item: ListItemData, index: number): void => {
        if(item.name.includes(name)){
            position = index + 1;
            return;
        }
    })

    return position;
}

describe("List reducer", () => {
    it("getList should return a list conatining the searched user in within the top ten position", () => {
        const name = "laila";
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
        const name = "Jayne"
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
})
