import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Product } from "../types/product";
import { Link } from "expo-router";

type ProductItemProps = {
  data: Product;
};

const ProductItem = ({ data }: ProductItemProps) => {
  return (
    <Link href={`/product/${data.id}`} asChild>
      <Pressable style={s.container}>
        <Image style={s.img} source={{ uri: data.image }} resizeMode="cover" />
        <View style={s.info}>
          <Text style={s.title}>{data.title}</Text>
          <Text style={s.description}>{data.description}</Text>
          <Text style={s.price}>R$ {data.price.toFixed(2)}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

const s = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 20,
        alignItems: "stretch", // Faz a View de info e a imagem ficarem alinhadas verticalmente
      },
      img: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: "#CCCCCC",
        marginRight: 20,
      },
      info: {
        flex: 1, // Permite que a View use o espaço restante sem ultrapassar
        flexShrink: 1, // Evita que a View cresça mais do que necessário
        backgroundColor: "#efeeee",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 100 - 2, // Mantém a altura alinhada à da imagem
        justifyContent: "center", // Centraliza o conteúdo na View
        borderWidth: 1,
        borderColor: '#b5b3b3',
        borderStyle: "dotted",
      },
      title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
      },
      description: {
        fontSize: 13,
        color: "#555555",
        flexWrap: "wrap", // Garante que o texto quebre corretamente
        marginBottom: 5,
      },
      price: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "right",
      },
});

export default ProductItem;
