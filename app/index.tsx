import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../components/button";
import { router } from "expo-router"

const Screen = () => {
  const handleStart = () => {
    router.replace("/home")
  };

  return (
    <SafeAreaView style={s.container}>
      <View style={s.content}>
        <Image
          source={require("../assets/logo.png")}
          style={s.logo}
          resizeMode="cover"
        />
        <Text style={s.h1}>Loja do Fulano</Text>
        <Text style={s.h2}>Aqui você encontra tudo que quiser.</Text>
      </View>
      <View style={s.buttonContainer}>
        <Button title="Comerçar as compras" onPress={handleStart} />
      </View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    // backgroundColor: 'red',
    marginBottom: 40,
  },
  h1: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  h2: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default Screen;
