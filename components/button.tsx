import { Pressable, StyleSheet, Text, View } from "react-native"

type ButtonProps = {
    title: string
    onPress: () => void
}

const Button = ({title, onPress}: ButtonProps) => {
    return(
        <Pressable onPress={onPress} style={s.button}>
            <Text style={s.buttonText}>{title}</Text>
        </Pressable>
    )
}

const s = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: '#164E85',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25
    },
    buttonText: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center'
    }
})

export default Button