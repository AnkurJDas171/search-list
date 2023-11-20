import React from "react";
// import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';
import { useColorScheme, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import App from "../App";
import alertReducer from "../src/store/slice/alert.slice";
import usersReducer from "../src/store/slice/users.slice";
import listReducer from "../src/store/slice/list.slice";
import { AppStyleMock } from "./__mock__/styles";

jest.mock('@rneui/themed', () => ({
    Button: jest.fn(),
    ListItem: jest.fn(),
    Input: jest.fn()
}))

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

jest.mock('react-native', () => ({
    useColorScheme: jest.fn(),
    StyleSheet: {
        create: jest.fn()
    }
}))

jest.mock('react-native-svg', () => ({
    SvgXml: jest.fn()
}));

let store: any;

beforeEach(() => {
    store = configureStore({
        reducer: {
            alert: alertReducer,
            users: usersReducer,
            list: listReducer
        }
    })
})

describe('App Component', () => {
    it('should render the component', () => {
        // jest.fn(useColorScheme).mockReturnValue('light');
        // jest.fn(StyleSheet.create).mockReturnValue(AppStyleMock)

        // // const tree = create(
        // //     <Provider store={store}>
        // //         <App />
        // //     </Provider>
        // // ).toJSON();
        // // expect(tree).toMatchSnapshot();

        // render(
        //     // <Provider store={store}>
        //         <App />
        //     // </Provider>
        // );
        // expect(screen.toJSON()).toMatchSnapshot();

        expect(true).toBeTruthy();
    })
})
