import { UserType } from "../../src/store/state/type";

export const waitAMoment = (): Promise<void> => new Promise((resolve) => setTimeout(resolve, 1000));

export const compareObjectData = (expectedData: UserType, result: UserType): boolean => {
    let dataMatched = true;

    Object.keys(expectedData).forEach((property: string) => {
        if(expectedData[property as keyof UserType] !== result[property as keyof UserType]){
            dataMatched = false;
        }
    })

    return dataMatched;
}
