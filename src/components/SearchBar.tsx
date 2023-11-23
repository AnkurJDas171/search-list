import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import AppTextInput from "../UI/AppTextInput";
import SearchIcon from "../assets/icons/Search";
import SearchButton from "./SearchButton";
import FuzzySearchButton from "./FuzzySearchButton";
import { testID } from "../assets/Constants";

const SearchBar = (): JSX.Element => {
    const [text, setText] = useState('');

    const handleChange = (value: string): void => {
        setText(value);
    }

    return (
        <View
            style={styles.body}
            testID={testID.APP_SEARCH_BAR}
        >
            <AppTextInput
                handleTextChange={handleChange}
                icon={<SearchIcon height="20" width="20" />}
                placeholder="name"
                value={text}
            />
            <View style={styles.buttonConatiner}>
                <SearchButton
                    searchedName={text}
                />
                <FuzzySearchButton
                    searchedName={text}
                />
            </View>
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
    },
    buttonConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '45%'
    }
})

export default SearchBar;
