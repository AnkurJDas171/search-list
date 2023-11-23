import { fuzzyMatch, isStringPresent, isUserPresent, isUserPresentInFuzzyMatch } from "../../../src/utils"
import mockUsersdata, { expectedFuzzyMatchedReturnData } from "../../__mock__/data/UsersData"
import { compareObjectData } from "../../__mock__/utils";

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

describe("isUserPresentInFuzzyMatch", () => {
    it("should return true when searched name is pertially matched in users data", () => {
        const searchedName = "Rica";
        const result = isUserPresentInFuzzyMatch(searchedName, mockUsersdata);

        expect(result).toBe(true);
    })

    it("should return false when searched name does not match with the users data", () => {
        const searchedName = "Hello world";
        const result = isUserPresentInFuzzyMatch(searchedName, mockUsersdata);

        expect(result).toBe(false);
    })
})

describe("fuzzyMatch", () => {
    it("should return list of partically matched users for the searched name", () => {
        const searchedName = "Rica";
        const resultList = fuzzyMatch(searchedName, mockUsersdata);
        
        for (let i = 0; i < resultList.length; i++) {
            const isMatched = compareObjectData(expectedFuzzyMatchedReturnData[i], resultList[i])
            
            expect(isMatched).toBe(true);
        }
    })

    it("should return empty list searched name is not matched with users data", () => {
        const searchedName = "Hello world";
        const resultList = fuzzyMatch(searchedName, mockUsersdata);
        
        expect(resultList.length).toBe(0);
    })
})

