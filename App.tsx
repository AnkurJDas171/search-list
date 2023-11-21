import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    useColorScheme,
} from 'react-native';

import Home from './src/screens/Home';
import { getUsers } from './src/store/slice/users.slice';
import { useAppDispatch } from './src/hooks';
import colors from './src/assets/colors';

const App = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return (
        <SafeAreaView style={styles.body}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            // backgroundColor={backgroundStyle.backgroundColor}
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
