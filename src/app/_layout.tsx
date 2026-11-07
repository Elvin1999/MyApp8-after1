import { FavoritesProvider } from "@/context/FavoritesContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2563eb",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="(drawer)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="product/[id]"
          options={{
            title: "Product Details",
            headerBackTitle: "Back",
          }}
        />
      </Stack>
    </FavoritesProvider>
  );
}
