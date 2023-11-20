export type AppListRenderItem = {
    item:{
        bananas: number,
        lastDayPlayed?: string,
        longestStreak?: number,
        name: string,
        stars: number,
        subscribed?: boolean,
        uid: string,
        isSearched: boolean
    },
    index: number
}

export type AppListItemProps = {
    data: {
        bananas: number,
        lastDayPlayed?: string,
        longestStreak?: number,
        name: string,
        stars: number,
        subscribed?: boolean,
        uid: string,
        isSearched: boolean
    },
    containerColor: string,
    rank: number,
    textColor?: string,
}

export type SearchBarButtonType = {
    searchedName: string
}
