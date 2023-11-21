import { isUserPresent } from "../../../src/utils"
import mockUsersdata from "../../__mock__/data/UsersData"

describe("Utils", () => {
    it("should return true when searched user name is present in the users data ", () => {
        const searchedUsed = "Rica";
        const result = isUserPresent(searchedUsed ,mockUsersdata);

        expect(result).toBe(true);
    })

    it("should return false when searched user name is not present in the users data ", () => {
        const searchedUsed = "Hello";
        const result = isUserPresent(searchedUsed ,mockUsersdata);

        expect(result).toBe(false);
    })
})
