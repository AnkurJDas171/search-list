import React, { useEffect } from "react";

import { ERROR_ALERT_MESSAGE, dataUrl } from "../assets/Constants";
import { useAppDispatch } from "./reduxHooks";
import { getUsers } from "../store/slice/users.slice";
import { setAlert } from "../store/slice/alert.slice";
import store from "../store";

const fetchUserData = async (storeData: typeof store.dispatch): Promise<void> => {
    try{
        const response = await fetch(dataUrl);
        const data = await response.json();
        storeData(getUsers(data));
    }catch(err){
        console.log("error is: ", err);
        storeData(setAlert(ERROR_ALERT_MESSAGE))
    }
}

const useDataFetch = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        fetchUserData(dispatch)
    }, [])
}

export default useDataFetch;
