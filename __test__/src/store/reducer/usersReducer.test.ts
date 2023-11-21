import usersReducer from "../../../../src/store/reducer/usersReducer";

describe("Users reducer", () => {
    it("getUsers should return userData", () => {
        const result = usersReducer.getUsers();

        expect(result).toBeTruthy();
    })
});
