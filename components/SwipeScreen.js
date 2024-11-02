import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';
import profiles from '../assets/profile_images'; // Array of profile images

const SwipeScreen = () => {
  const [currentProfile, setCurrentProfile] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentProfile((prev) => (prev + 1) % profiles.length);
  };

  const handleSwipeRight = () => {
    setCurrentProfile((prev) => (prev + 1) % profiles.length);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={profiles[currentProfile].image} />
        <Card.Title
          title={profiles[currentProfile].name}
          subtitle={profiles[currentProfile].bio}
          titleStyle={styles.title}
        />
      </Card>
      <View style={styles.actions}>
        <IconButton icon="thumb-down" color="red" size={40} onPress={handleSwipeLeft} />
        <IconButton icon="heart" color="green" size={40} onPress={handleSwipeRight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f3f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    height: '70%',
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 20,
  },
});

export default SwipeScreen;
