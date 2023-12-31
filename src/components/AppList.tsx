import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import AppListItem from "./AppListItem";
import { AppListRenderItem } from "./types";
import AppListTitle from "./AppListTitle";
import colors from "../assets/colors";
import { ListState } from "../store/state/type";
import { RootState } from "../store";
import { useAppSelector } from "../hooks/reduxHooks";
import { testID } from "../assets/Constants";

const AppList = (): JSX.Element => {
    const list = useAppSelector((state: RootState): ListState => state.list);

    const renderItem = ({ item, index }: AppListRenderItem) => {
        const containerColor = item.isSearched ? colors.SEARCH_ITEM :
            index % 2 ? colors.LIST_EVEN_ITEM : colors.LIST_ODD_ITEM;
        const textColor = item.isSearched ? colors.WHITE : colors.BLACK;

        return <AppListItem
            data={item}
            containerColor={containerColor}
            textColor={textColor}
        />
    }

    return (
        <View style={styles.body}>
            {list.length > 0 && <>
                <AppListTitle />
                <FlatList
                    data={list}
                    keyExtractor={item => item.uid}
                    renderItem={renderItem}
                    style={styles.listContainer}
                    testID={testID.APP_LIST}
                />
            </>}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 8,
        width: '100%'
    },
    listContainer: {
        height: '90%'
    }
})

export default AppList;
