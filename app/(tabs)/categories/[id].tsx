import { router, Stack, useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";
import { useEffect } from "react"

import ProductItem from "../../../components/product-item"

import { getCategoryById } from "../../../services/category";
import { getProductByCategory } from "../../../services/product";

const Screen = () => {
    
  const keyToExtractor = (item: any) => {
    return item.id.toString();
  };

  const { id } = useLocalSearchParams();
  const idCategory = parseInt(id as string);

  const category = getCategoryById(idCategory)!;

  const products = getProductByCategory(idCategory);

  // navega de volta casa nao retorna nada na categoria
  useEffect(() => {
    if(category === null){
      router.back()
    }
  }, [category])


  return (
    <View style={s.container}>
      <Stack.Screen options={{ title: category.title }} />
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
