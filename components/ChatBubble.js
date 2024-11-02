import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBubble = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>{message.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#e2e2e2',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
});

export default ChatBubble;
