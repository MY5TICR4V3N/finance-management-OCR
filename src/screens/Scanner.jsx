import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text, 
  SafeAreaView, 
  
  View
  } from 'react-native';
import {
	useCameraDevice,
	Camera,
	useCameraPermission,
} from 'react-native-vision-camera';

const Scanner = () => {
	const {hasPermission, requestPermission} = useCameraPermission();

	// console.log(hasPermission)

	useEffect(() => {
		if (!hasPermission) {
			requestPermission();
		}
	}, [hasPermission]);

	const device = useCameraDevice('back');
 

	if (!device) {
		<Text>not found</Text>;
	}

	const [isActive, setIsActive] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setIsActive(true);
		}, 500);
	}, []);

	return (
		<View style={{flex: 1}}>
			<Camera
				device={device}
				isActive={isActive}
				style={StyleSheet.absoluteFill}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Scanner;
