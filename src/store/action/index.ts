import { UserState } from "../state/type"

export type GetListActionType = {
    users: UserState,
    searchedName: string
}
