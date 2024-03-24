import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Camera } from 'react-native-vision-camera';

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePhoto();
      console.log('photo', photo);
    }
  };

  return (
    <View style={styles.container}>
      {hasPermission ? (
        <Camera
          style={styles.camera}
          ref={cameraRef}
          photo={true}
          enableHighQualityPhotos={true}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});

export default Scanner;