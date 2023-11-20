import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./slice/users.slice";
import listReducer from "./slice/list.slice";
import alertReducer from "./slice/alert.slice";

const store = configureStore({
    reducer: {
        alert: alertReducer,
        users: usersReducer,
        list: listReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
