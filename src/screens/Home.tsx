import React from "react";
import { StyleSheet, View } from "react-native"

import AppList from "../components/AppList";
import SearchBar from "../components/SearchBar";
import AppTextContainer from "../UI/AppTextContainer";
import AppAlert from "../components/AppAlert";

const Home = (): JSX.Element => {
    return (
        <>
            <View style={styles.body}>
                <SearchBar />
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
    }
})

export default Home;
