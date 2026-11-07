
import {
  View,
  Text,
  Switch,
  StyleSheet,
} from 'react-native';

import { useState } from 'react';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Settings
      </Text>

      <View style={styles.row}>
        <Text style={styles.label}>
          Notifications
        </Text>

        <Switch
          value={notifications}
          onValueChange={setNotifications}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Dark Mode
        </Text>

        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
        />
      </View>

      <Text style={styles.note}>
        These switches are a local state demo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3f5f9',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  row: {
    backgroundColor: '#fff',
    padding: 18,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 17,
    fontWeight: '500',
  },
  note: {
    color: '#888',
    marginTop: 15,
  },
});
 