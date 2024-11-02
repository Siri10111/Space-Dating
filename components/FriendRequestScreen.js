import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { supabase } from '../supabase';

const FriendRequestScreen = () => {
  const [friendRequests, setFriendRequests] = useState([]);

  useEffect(() => {
    const fetchFriendRequests = async () => {
      const user = supabase.auth.user();
      const { data, error } = await supabase.from('friend_requests').select('*').eq('recipient_id', user.id);
      if (error) {
        console.error(error);
      } else {
        setFriendRequests(data);
      }
    };
    fetchFriendRequests();
  }, []);

  const handleAcceptRequest = async (requestId) => {
    const { error } = await supabase.from('friend_requests').delete().eq('id', requestId);
    if (error) {
      Alert.alert('Error', 'Could not accept request.');
    } else {
      setFriendRequests(prev => prev.filter(req => req.id !== requestId));
      Alert.alert('Success', 'Friend request accepted.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friend Requests</Text>
      {friendRequests.length === 0 ? (
        <Text>No friend requests</Text>
      ) : (
        friendRequests.map(request => (
          <View key={request.id} style={styles.request}>
            <Text>{request.sender_name}</Text>
            <Button title="Accept" onPress={() => handleAcceptRequest(request.id)} />
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  request: { marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', width: '80%' },
});

export default FriendRequestScreen;
