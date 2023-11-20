import { UserDataType } from "../state/type";

import * as userData from "../../assets/data/leaderboard.json";

const usersReducer = {
    getUsers: (state: UserDataType) => {
        // fetch(dataUrl)
        //     .then(res => {
        //         console.log('response: ', res);
        //         res.json()})
        //     // .then((data: UserDataType) => {
        //     //     console.log('data fetch success: ', data);

        //     //     state = {
        //     //         ...state,
        //     //         users: data
        //     //     };
        //     // })
        //     .catch(err => {
        //         console.log('error while fetching data: ', err)
        //     })
        // const newState = {
        //     ...state,
        //     users: userData
        // }

        return userData
    }
}

export default usersReducer;
