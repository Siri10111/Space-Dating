import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as faceapi from 'face-api.js';

const FaceEncodingScreen = () => {
  useEffect(() => {
    (async () => {
      await faceapi.nets.ssdMobilenetv1.loadFromUri('/models'); // Load your model
      await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
      await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
    })();
  }, []);

  const encodeFace = async (image) => {
    const img = await faceapi.fetchImage(image);
    const detections = await faceapi.detectAllFaces(img).withFaceLandmarks().withFaceDescriptors();
    
    if (detections.length > 0) {
      const faceDescriptor = detections[0].descriptor;
      // Send faceDescriptor to your backend for storage
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Face Encoding</Text>
      <Button title="Encode My Face" onPress={() => encodeFace('path/to/image.jpg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
});

export default FaceEncodingScreen;
