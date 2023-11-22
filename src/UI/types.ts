import { StyleProp, ViewStyle } from "react-native"

export type AppButtonProps = {
    color: string,
    containerStyle?: StyleProp<ViewStyle>
    handlePress: () => void,
    isDisable: boolean,
    title: string,
    titleColor: string
}

export type AppTextContrainerProps = {
    textColor?: string,
    title: string | number | boolean
}

export type AppTextInputProps = {
    handleTextChange: (arg: string) => void,
    icon: Element,
    placeholder: string,
    value: string
}
