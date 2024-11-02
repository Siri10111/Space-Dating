import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/icon.png')} // Replace with your own background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Space Dating</Text>
        <Text style={styles.subtitle}>Find your perfect match among the stars!</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Register"
            onPress={() => navigation.navigate('RegisterScreen')}
            color="#841584" // Customize button color
          />
          <Button
            title="Login"
            onPress={() => navigation.navigate('LoginScreen')}
            color="#841584" // Customize button color
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for readability
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default LandingScreen;
