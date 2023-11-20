import React, { useEffect } from "react";
import { Animated, Modal, StyleSheet, Text, View } from "react-native";

import colors from "../assets/colors";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";
import { AlertType } from "../store/state/type";
import { resetAlert } from "../store/slice/alert.slice";
import { ALERT_VISIBLE_TIME } from "../assets/Constants";

const AppAlert = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const alertState = useAppSelector((state: RootState): AlertType => state.alert)
    const { showAlert, alertText } = alertState;

    const handleRequestClose = () => {
        dispatch(resetAlert());
    }

    useEffect(() => {
        if(showAlert){
            setTimeout(() => {
                handleRequestClose();
            }, ALERT_VISIBLE_TIME)
        }
    }, [showAlert])

    return (
        <Modal
            visible={showAlert}
            animationType="fade"
            onRequestClose={handleRequestClose}
            transparent={true}
        >
            <View style={styles.body}>
                <Animated.View style={[styles.container]}>
                    <Text style={styles.text}>{alertText}</Text>
                </Animated.View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    body: {
        height: '100%',
        backgroundColor: colors.BLACK_SEMI_TRANSPARENT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: colors.WHITE,
        borderRadius: 10,
        height: '15%',
        justifyContent: 'center',
        width: '70%',
        marginBottom: '20%'
    },
    text: {
        fontSize: 15,
        paddingHorizontal: 20,
        textAlign: 'center',
    }
})

export default AppAlert;
