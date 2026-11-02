
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';

import { Link } from 'expo-router';

const Home = () => {

  return (

    <View style={styles.container}>

      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />

      <View style={styles.header}>
        <Text style={styles.subtitle}>WELCOME BACK</Text>

        <Text style={styles.title}>
          React Native
          <Text style={styles.highlight}> Navigation</Text>
        </Text>

        <Text style={styles.description}>
          Explore different screens using Expo Router.
        </Text>
      </View>

      <View style={styles.cardContainer}>

        <Link href="/About" style={styles.card}>
          <View style={[styles.iconBox, { backgroundColor: '#dbeafe' }]}>
            <Text style={styles.icon}>📘</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>About</Text>
            <Text style={styles.cardDescription}>
              Learn about this application
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Link>

        <Link href="/image" style={styles.card}>
          <View style={[styles.iconBox, { backgroundColor: '#dcfce7' }]}>
            <Text style={styles.icon}>🖼️</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Images</Text>
            <Text style={styles.cardDescription}>
              Explore image components
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Link>

        <Link href="/UserProfile" style={styles.card}>
          <View style={[styles.iconBox, { backgroundColor: '#f3e8ff' }]}>
            <Text style={styles.icon}>👤</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>User Profile</Text>
            <Text style={styles.cardDescription}>
              View user information
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Link>

      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Built with React Native & Expo Router
        </Text>
      </View>

    </View>

  );
};

export default Home;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 22,
    paddingTop: 65
  },

  header: {
    marginBottom: 35
  },

  subtitle: {
    color: '#64748b',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 12
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0f172a'
  },

  highlight: {
    color: '#2563eb'
  },

  description: {
    color: '#64748b',
    fontSize: 15,
    marginTop: 12,
    lineHeight: 23
  },

  cardContainer: {
    gap: 18
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3
  },

  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },

  icon: {
    fontSize: 25
  },

  cardContent: {
    flex: 1,
    marginLeft: 15
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0f172a'
  },

  cardDescription: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 5
  },

  arrow: {
    fontSize: 30,
    color: '#94a3b8'
  },

  footer: {
    marginTop: 'auto',
    paddingVertical: 25,
    alignItems: 'center'
  },

  footerText: {
    fontSize: 12,
    color: '#94a3b8'
  }

});
