import { isStringPresent, isUserPresent } from "../../../src/utils"
import mockUsersdata from "../../__mock__/data/UsersData"

const userDataKey = "00D1LA8puAa1GINkVpfgC1TmO0m1";

describe("isUserPresent", () => {
    it("should return true when searched user name is present in the users data ", () => {
        const searchedUsed = "Chris Buckley";
        const result = isUserPresent(searchedUsed, mockUsersdata);

        expect(result).toBe(true);
    })

    it("should return false when searched user name is not present in the users data ", () => {
        const searchedUsed = "Hello";
        const result = isUserPresent(searchedUsed, mockUsersdata);

        expect(result).toBe(false);
    })
});

describe("isStringPresent", () => {
    it("should return true when searched user name matches the user name ", () => {
        const searchedUsed = "Chris Buckley";
        const name = mockUsersdata[0].name;
        const result = isStringPresent(name, searchedUsed);

        expect(result).toBe(true);
    })

    it("should return true when searched user name partially matches the user name ", () => {
        const searchedUsed = "Chris";
        const name = mockUsersdata[0].name;
        const result = isStringPresent(name, searchedUsed);

        expect(result).toBe(true);
    })

    it("should return false when searched user name doesn't match the user name ", () => {
        const searchedUsed = "Hello";
        const name = mockUsersdata[0].name;
        const result = isStringPresent(name, searchedUsed);

        expect(result).toBe(false);
    })
})

