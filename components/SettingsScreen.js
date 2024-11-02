// SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const SettingsScreen = () => {
  return (
    <ImageBackground 
      source={require('../assets/icon.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Adjust your preferences here.</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 34,
    color: '#FFF',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#B0E0E6',
  },
});

export default SettingsScreen;
