type data = {
    bananas: number,
    lastDayPlayed: string,
    longestStreak: number,
    name: string,
    stars: number,
    subscribed: boolean,
    uid: string,
    isSearched?: boolean,
    rank?: number
}

export type AlertState = {
    showAlert: boolean,
    alertText: string
}

export type UserType = data;

export type ListItemData = data;

export type UserDataType = { [key: string]: data };

export type ListState = data[] | [];

export type UserState = data[] | []
