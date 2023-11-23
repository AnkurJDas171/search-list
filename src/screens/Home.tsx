import React from "react";
import { StyleSheet, View } from "react-native"

import AppList from "../components/AppList";
import SearchBar from "../components/SearchBar";
import AppAlert from "../components/AppAlert";
import ReverseListButton from "../components/ReverseListButton";
import SortListButton from "../components/SortListButton";
import { testID } from "../assets/Constants";

const Home = (): JSX.Element => {
    return (
        <>
            <View
                style={styles.body}
                testID={testID.APP_HOME_SCREEN}
            >
                <SearchBar />
                <View style={styles.buttonConatiner}>
                    <ReverseListButton />
                    <SortListButton />
                </View>
                <AppList />
            </View>
            <AppAlert />
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        width: '100%'
    },
    buttonConatiner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default Home;
