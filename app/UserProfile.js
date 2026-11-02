import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const UserProfile = () => {

    const user = {
        name: "Suresh", 
        role: "Full stack developer",
        location: "Hyderabad",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7LQ2ffuKircgkxu0bKi8sVvi4co4gNVEHGVzqo563dyPvTCXcZcV4tg0&s=10"
    }

 return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Image
          source={{ uri: user.image }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>
          {user.name}
        </Text>

        <Text style={styles.role}>
          {user.role}
        </Text>

        <Text style={styles.location}>
          📍 {user.location}
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
  },

  role: {
    fontSize: 16,
    color: '#2563eb',
    marginTop: 5,
  },

  location: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 10,
  },

});
export default UserProfile