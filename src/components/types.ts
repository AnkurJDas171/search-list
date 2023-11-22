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

export type AppListRenderItem = {
    item: data,
    index: number
}

export type AppListItemProps = {
    data: data,
    containerColor: string,
    textColor?: string,
}

export type SearchBarButtonType = {
    searchedName: string
}
