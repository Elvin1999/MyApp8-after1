
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { router } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>👨‍💻</Text>

      <Text style={styles.name}>
        Student User
      </Text>

      <Text style={styles.email}>
        student@example.com
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate('/settings')}
      >
        <Text style={styles.buttonText}>
          Open Settings
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate('/')}
      >
        <Text style={styles.buttonText}>
          Go Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f5f9',
    padding: 20,
  },
  avatar: {
    fontSize: 80,
    marginBottom: 15,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 15,
    color: '#777',
    marginTop: 5,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
 