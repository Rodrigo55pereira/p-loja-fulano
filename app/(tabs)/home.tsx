import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAllProducts } from "../../services/product";
import ProductItem from "../../components/product-item";

const Screen = () => {
  const products = getAllProducts();

  const keyToExtractor = (item: any) => {
    return item.id.toString();
  };

  return (
    <View style={s.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem data={item} />}
        keyExtractor={keyToExtractor}
        style={s.list}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
});

export default Screen;
