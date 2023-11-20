import { UserDataType } from "../state/type"

export type GetListActionType = {
    users: UserDataType,
    searchedName: string
}
