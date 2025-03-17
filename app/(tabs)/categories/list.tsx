import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAllCategory } from "../../../services/category"
import CategoryItem from "../../../components/category-item"

const List = () => {

    const categories = getAllCategory()

    const keyToExtractor = (item: any) => {
    return item.id.toString();
  };

  return (
    <View style={s.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem data={item} />}
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

export default List;
