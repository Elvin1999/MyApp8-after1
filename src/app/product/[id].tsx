import { useFavorites } from "@/context/FavoritesContext";
import { products } from "@/data/products";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProductDetailsScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();

    const { toggleFavorite, isFavorite } = useFavorites();

    const product = products.find(
        (item) => item.id === id
    );

    if (!product) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Product not found!
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.replace("/")}
                >
                    <Text style={styles.buttonText}>
                        Go Home
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>
                {product.emoji}
            </Text>
            <Text style={styles.title}>
                {product.name}
            </Text>

            <Text style={styles.price}>
                ${product.price}
            </Text>

            <Text style={styles.description}>
                {product.description}
            </Text>

            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => toggleFavorite(product.id)}
            >
                <Ionicons
                    name={
                        isFavorite(product.id) ?
                            'heart'
                            : 'heart-outline'
                    }
                    size={24}
                    color="#ef4444"
                />
                <Text style={styles.favoriteText}>
                    {isFavorite(product.id) ?
                        'Remove from Favorites'
                        : 'Add to favorites'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.back()}
            >
                <Text style={styles.buttonText}>
                    Go Back
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
        backgroundColor: '#f3f5f9',
    },
    emoji: {
        fontSize: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 25,
        color: '#2563eb',
        fontWeight: 'bold',
        marginTop: 15,
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginVertical: 20,
    },
    favoriteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 12,
        marginBottom: 20,
    },
    favoriteText: {
        color: '#ef4444',
        fontWeight: '600',
    },
    button: {
        backgroundColor: '#2563eb',
        paddingVertical: 14,
        paddingHorizontal: 35,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});