import { Dimensions, PixelRatio } from "react-native";
import Fuse from "fuse.js";

import { ListState, UserState, UserType } from "../store/state/type";

const {
    height: HEIGHT,
    width: WIDTH
} = Dimensions.get("window");

console.log(HEIGHT, WIDTH);

const heightBaseScale = HEIGHT / 667;
const widthBaseScale = WIDTH / 375;

export const fontSize = (size: number): number => {
    const newSize = size * widthBaseScale;

    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const height = (height: number): number => {
    const newHeight = height * widthBaseScale;

    return Math.round(PixelRatio.roundToNearestPixel(newHeight));
}

export const fuzzyMatch = (searchedName: string, users: UserState): ListState => {
    const fuse = new Fuse(users, {
        ignoreLocation: false,
        includeScore: true,
        isCaseSensitive: false,
        keys: ["name"],
        threshold: 0.3,
    });

    const searchedResult = fuse.search(searchedName).map(data => data.item);
    return searchedResult
}

const createPairCombination = (str: string): string[] => {
    const pair = [];
    const numberOfPairs = str.split(" ").length;

    for (let i = 0; i < numberOfPairs; i++) {
        let text = "";

        for (let j = i; j < numberOfPairs; j++) {
            text += (text ? " " : "") + str.split(" ")[j];
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

export const isUserPresent = (searchedName: string, users: UserState): boolean => {
    let userPresent = false;
    if (users.length === 0 || !searchedName) return userPresent;

    users.forEach((user: UserType) => {
        if (user.name && isStringPresent(user.name.toLocaleLowerCase(), searchedName.toLocaleLowerCase())) {
            userPresent = true;
            return;
        }
    })

    return userPresent;
}

export const isUserPresentInFuzzyMatch = (searchedName: string, users: UserState): boolean => {
    if (users.length === 0 || !searchedName) return false;

    const fuzzyMatchData = fuzzyMatch(searchedName, users);
    if (fuzzyMatchData.length > 0) {
        return true;
    }

    return false;
}
