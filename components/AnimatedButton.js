// components/AnimatedButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AnimatedButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00a8ff',
    borderRadius: 10,
    paddingVertical: 15,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default AnimatedButton;
