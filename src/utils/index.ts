import { UserDataType } from "../store/state/type";

const createPairCombination = (str: string): string[] => {
    const pair = [];
    const numberOfPairs = str.split(" ").length;

    for (let i = 0; i < numberOfPairs; i++) {
        let text = "";

        for (let j = i; j < numberOfPairs; j++) {
            text += (text ? " " : "" )+ str.split(" ")[j];
            pair.push(text);
        }
    }

    return pair;
}

export const isStringPresent = (name: string, searchedName: string): boolean => {
    if (!name) return false;
    if (name.toLocaleLowerCase() === searchedName.toLocaleLowerCase()) return true;

    let isPreset = false;

    const namePairs = createPairCombination(name.toLocaleLowerCase());
    namePairs.forEach((subStr: string) => {
        if (subStr === searchedName.toLocaleLowerCase()) {
            isPreset = true;
            return;
        }
    })

    return isPreset;
}

export const isUserPresent = (user: string, users: UserDataType): boolean => {
    let userPresent = false;
    if (users === null || !user) return userPresent;

    Object.keys(users).forEach((key: string) => {
        if (users[key].name && isStringPresent(users[key].name, user)) {
            userPresent = true;
            return;
        }
    })

    return userPresent;
}
