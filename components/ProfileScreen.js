import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { supabase } from '../supabase';

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    bio: '',
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      const user = supabase.auth.user();
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error(error);
      } else {
        setUserInfo(data);
      }
    };

    fetchUserInfo();
  }, []);

  const handleUpdateProfile = async () => {
    const { error } = await supabase
      .from('profiles')
      .update(userInfo)
      .eq('id', supabase.auth.user().id);

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Success', 'Profile updated successfully!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userInfo.username}
        onChangeText={(text) => setUserInfo({ ...userInfo, username: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Bio"
        value={userInfo.bio}
        onChangeText={(text) => setUserInfo({ ...userInfo, bio: text })}
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a2e',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#e94560',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#e94560',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
