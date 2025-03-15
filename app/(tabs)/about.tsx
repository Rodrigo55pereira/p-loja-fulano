import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native"

const About = () => {
    return(
        <SafeAreaView style={s.container}>
                <Image
                    source={{uri: "https://github.com/Rodrigo55pereira.png"}}
                    style={s.img_perfil}
                    resizeMode="cover"
                />            
            <Text>Fui eu quem fez :D</Text>
        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    img_perfil: {
        borderRadius: 100,
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: "#164E85",
        borderStyle: "dashed",
        marginBottom: 10,
    }
})

export default About