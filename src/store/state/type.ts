export type UserType = {
    bananas: number,
    lastDayPlayed: string,
    longestStreak: number,
    name: string,
    stars: number,
    subscribed: boolean,
    uid: string
}

export type ListItemData = {
    bananas: number,
    lastDayPlayed: string,
    longestStreak: number,
    name: string,
    stars: number,
    subscribed: boolean,
    uid: string,
    isSearched: boolean
}

export type AlertType = {
    showAlert: boolean,
    alertText: string
}

export type UserDataType = { [key: string]: UserType } | null;

export type ListType = ListItemData[] | null;
