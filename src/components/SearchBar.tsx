import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import AppTextInput from "../UI/AppTextInput";
import SearchIcon from "../assets/icons/Search";
import SearchBarButton from "./SearchBarButton";

const SearchBar = (): JSX.Element => {
    const [text, setText] = useState('');

    const handleChange = (value: string): void => {
        setText(value);
    }

    return (
        <View 
            style={styles.body}
            testID="app-search-bar"
        >
            <AppTextInput
                handleTextChange={handleChange}
                icon={<SearchIcon height="20" width="20" />}
                placeholder="name"
                value={text}
            />
            <SearchBarButton
                searchedName={text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})

export default SearchBar;
