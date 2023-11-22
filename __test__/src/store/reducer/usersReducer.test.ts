import usersReducer from "../../../../src/store/reducer/usersReducer";
import { UserState, UserType } from "../../../../src/store/state/type";
import { expectedValue, mockUserDataFromApi } from "../../../__mock__/data/UsersData";

const compareObjectData = (expectedData: UserType, result: UserType): boolean => {
    let dataMatched = true;

    Object.keys(expectedData).forEach((property: string) => {
        if(expectedData[property as keyof UserType] !== result[property as keyof UserType]){
            dataMatched = false;
        }
    })

    return dataMatched;
}

describe("Users reducer", () => {
    it("getUsers should return userData", () => {
        const initialState: UserState = [];
        const action = {
            payload: mockUserDataFromApi,
            type: "users"
        }

        const result: UserState = usersReducer.getUsers(initialState, action);

        expect(result).toBeTruthy();
        for (let index = 0; index < result.length; index++) {
            const isMatched = compareObjectData(expectedValue[index], result[index]);
            expect(isMatched).toBe(true);
        }
    })
});
