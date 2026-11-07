import { useFavorites } from "@/context/FavoritesContext";
import { products } from "@/data/products";
import { router } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function FavoriteScreen() {
  const { favorites, toggleFavorite } = useFavorites();

  const favoritesProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favorites❤️</Text>

      {favorites.length === 0 ? (
        <Text style={styles.empty}>No favorite products yet!</Text>
      ) : (
        <FlatList
          data={favoritesProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() =>
                  router.push({
                    pathname: "/product/[id]",
                    params: { id: item.id },
                  })
                }
              >
                <Text style={styles.name}>
                  {item.emoji} {item.name}
                </Text>
                <Text>${item.price}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                <Text style={styles.remove}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
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
  },
  empty: {
    textAlign: "center",
    marginTop: 80,
    fontSize: 17,
    color: "#888",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  remove: {
    color: "#ef4444",
    fontWeight: "600",
  },
});
