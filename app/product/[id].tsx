import { Stack, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/button";
import { getProductById } from "../../services/product";

const Screen = () => {
  const { id } = useLocalSearchParams();
  const idProduct = parseInt(id as string);

  const product = getProductById(idProduct)!;

  const handleByButton = () => {
    alert(`Você clicou no item: ${product.id}`);
  };

  return (
    <SafeAreaView style={s.container}>
      <Stack.Screen options={{ title: "" }} />
      <ScrollView style={s.area}>
        <Image
          style={s.img}
          source={{ uri: product.image }}
          resizeMode="cover"
        />
        <Text style={s.title}>{product.title}</Text>
        <Text style={s.description}>{product.description}</Text>
        <View style={s.priceArea}>
          <Text style={s.price}>R$ {product.price.toFixed(2)}</Text>
        </View>
      </ScrollView>
      <View style={s.buttonArea}>
        <Button title="Comprar Agora" onPress={handleByButton} />
      </View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  area: {
    flex: 1,
    marginHorizontal: 20,
    // backgroundColor: "red",
  },
  buttonArea: {
    margin: 20,
  },
  img: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: "#555555",
    marginBottom: 20,
  },
  priceArea: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#CCCCCC",
  },
  price: {
    fontSize: 22,
    textAlign: "center",
  },
});

export default Screen;
