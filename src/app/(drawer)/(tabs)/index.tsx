import { useFavorites } from "@/context/FavoritesContext";
import { products } from "@/data/products";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.productInfo}
              onPress={() => {
                router.push({
                  pathname: "/product/[id]",
                  params: { id: item.id },
                });
              }}
            >
              <Text style={styles.emoji}>{item.emoji}</Text>

              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.details}>View Details ➡️</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => toggleFavorite(item.id)}
              style={styles.heartButton}
            >
              <Ionicons
                name={isFavorite(item.id) ? "heart" : "heart-outline"}
                color={isFavorite(item.id) ? "#ef4444" : "#999"}
                size={36}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f3f5f9",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#111827",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    marginBottom: 12,
    padding: 16,
  },
  productInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  emoji: {
    fontSize: 44,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    color: "#2563eb",
    fontSize: 16,
    marginTop: 5,
  },
  details: {
    color: "#777",
    marginTop: 8,
  },
  heartButton: {
    padding: 8,
  },
});
