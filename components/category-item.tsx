import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Category } from "../types/category";
import { router } from "expo-router";

type CategoryItemProps = {
  data: Category;
};

const CategoryItem = ({ data }: CategoryItemProps) => {
  const handleClick = () => {
    router.push(`/categories/${data.id}`);
  };

  return (
    <Pressable onPress={handleClick} style={s.container}>
      <Image style={s.image} source={{ uri: data.cover }} resizeMode="cover" />
      <View style={s.bg}></View>
      <View style={s.box}>
        <Text style={s.title}>{data.title}</Text>
      </View>
    </Pressable>
  );
};

const s = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: "#333333",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  bg: {
    height: 150,
    backgroundColor: "#000000",
    opacity: 0.6,
    borderRadius: 10,
    marginTop: -150,
  },
  box: {
    height: 150,
    marginTop: -150,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});

export default CategoryItem;
