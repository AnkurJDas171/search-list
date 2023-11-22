import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    useColorScheme,
} from 'react-native';

import Home from './src/screens/Home';
import colors from './src/assets/colors';
import useDataFetch from './src/hooks/dataFetchHook';

const App = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    useDataFetch();

    return (
        <SafeAreaView style={styles.body}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <Home />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: colors.WHITE
    }
});

export default App;
