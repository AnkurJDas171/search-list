import { UserDataType } from "../store/state/type";

export const isUserPresent = (user: string, users: UserDataType): boolean => {
    let userPresent = false;
    if(users === null || !user) return userPresent;

    Object.keys(users).forEach((key: string) => {
        if(users[key].name && (users[key].name).includes(user)) {
            userPresent = true;
            return;
        }
    })

    return userPresent;
}
