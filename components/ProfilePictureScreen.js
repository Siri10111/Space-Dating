import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';

const ProfilePictureScreen = ({ navigation }) => {
  const [displayName, setDisplayName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // Function to choose a profile picture from the gallery
  const pickImageFromGallery = () => {
    ImagePicker.launchImageLibrary(
      { mediaType: 'photo', includeBase64: true, quality: 0.7 },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          setProfileImage(response.assets[0]);
        }
      }
    );
  };

  // Function to upload the profile picture to the server
  const handleUpload = async () => {
    if (!displayName || !profileImage) {
      Alert.alert('Error', 'Please enter a display name and choose a profile picture.');
      return;
    }

    setIsUploading(true);

    try {
      // Prepare the data to send
      const payload = {
        displayName,
        image: profileImage.base64, // Sending image as base64
      };

      // Replace this with your Supabase API endpoint for profile upload
      const apiUrl = 'https://tuhvfygmvfxicftbtnhn.supabase.co';

      const response = await axios.post(apiUrl, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        Alert.alert('Profile Updated', 'Your profile picture and display name have been saved.');
        navigation.navigate('HomeScreen'); // Redirect to Home or other screen on success
      } else {
        Alert.alert('Upload Failed', 'Could not save profile. Try again.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Error', 'An error occurred while uploading. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Your Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Display Name"
        placeholderTextColor="#B0B0B0"
        onChangeText={setDisplayName}
        value={displayName}
      />

      <TouchableOpacity style={styles.imagePicker} onPress={pickImageFromGallery}>
        {profileImage ? (
          <Image source={{ uri: profileImage.uri }} style={styles.image} />
        ) : (
          <Text style={styles.imagePickerText}>Choose Profile Picture</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.uploadButton} onPress={handleUpload} disabled={isUploading}>
        {isUploading ? <ActivityIndicator color="#FFF" /> : <Text style={styles.uploadButtonText}>Save Profile</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1F1B24', alignItems: 'center', padding: 20 },
  title: { color: '#FF69B4', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    width: '90%',
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 10,
    fontSize: 16,
    color: '#FFF',
    marginBottom: 20,
  },
  imagePicker: {
    width: 150,
    height: 150,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
    marginBottom: 20,
  },
  imagePickerText: { color: '#B0B0B0' },
  image: { width: 150, height: 150, borderRadius: 75 },
  uploadButton: {
    backgroundColor: '#FF69B4',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  uploadButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});

export default ProfilePictureScreen;
