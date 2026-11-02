import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function App() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>KP</Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.name}>Kalyan</Text>
          <Text style={styles.role}>Full Stack Developer</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  details: {
    marginLeft: 15,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  role: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 5,
  },
});

export default App;