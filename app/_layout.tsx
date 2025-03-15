import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar"

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
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  );
};

export default RootLayout;
