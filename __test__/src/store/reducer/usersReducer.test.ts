import usersReducer from "../../../../src/store/reducer/usersReducer";
import mockUsersdata from "../../../__mock__/data/UsersData";

describe("Users reducer", () => {
    it("getUsers should return userData", () => {
        const initialState = null;
        const action = {
            payload: mockUsersdata,
            type: "users"
        }

        const result = usersReducer.getUsers(initialState, action);

        expect(result).toBeTruthy();
    })
});
