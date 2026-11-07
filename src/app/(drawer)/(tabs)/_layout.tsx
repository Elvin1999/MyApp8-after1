import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: "#777",
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 65,
          paddingTop: 6,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="home"
              color={focused ? "#2563eb" : "#777"}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="heart"
              color={focused ? "#2563eb" : "#777"}
              size={size}
            />),
        }}
      />
    </Tabs>
  );
}
