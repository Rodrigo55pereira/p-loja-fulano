import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  return (
    <>
      {/* Forçar a aparência da barra de status no iOS */}
      <StatusBar style="light" backgroundColor="#164E85" />
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarBackgroundColor: "#164E85",
          statusBarStyle: "light",
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" options={{ title: "Produtos" }} />
        <Stack.Screen
          name="product/[id]"
          options={{
            headerShown: true,
            /* headerLeft: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginLeft: 8, color: '#164E85'}}
                >
                  Produtos
                </Text>
              </View>
            ),
            */
          }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;
