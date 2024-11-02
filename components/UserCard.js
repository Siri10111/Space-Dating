import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserCard = ({ name, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 300,
  },
  name: {
    fontSize: 24,
    color: '#FFF',
    padding: 10,
    textAlign: 'center',
  },
});

export default UserCard;
