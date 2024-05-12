import React, {useEffect, useState, useRef} from 'react';
import {
	StyleSheet,
	Text,
	SafeAreaView,
	TouchableOpacity,
	View,
} from 'react-native';
import {
	useCameraDevice,
	Camera,
  
	useCameraPermission,
} from 'react-native-vision-camera';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import { Platform } from 'react-native';
import RNFS from 'react-native-fs';



import  {CameraRoll}  from '@react-native-camera-roll/camera-roll';
//used to move back to the list
import {useNavigation} from '@react-navigation/native';
function replaceCharacters(str) {
	return str.replace(/[@.]/g, '_');
  }

const Scanner = (navigation, route) => {
	

	let imagePath = '';
	const [email, setEmail] = useState(null);
	const [binaryBuffer, setBinaryBuffer] = useState(null);



	const {hasPermission, requestPermission} = useCameraPermission();

	const readFile = async( img )=> {
		try {
			// Get the cache directory path

			// Construct the file path in the cache directory

			RNFS.readFile(img, 'base64') // 'base64' to process binary format
				.then(file => {
					console.log('Getting image');
					// console.log(file);
					setBinaryBuffer(file);
				});
		} catch (error) {
			console.error('Error reading file:', error);
		}
	};

	useEffect(() => {
		fetchEmail();
		console.log(email);
		if (!hasPermission) {
			requestPermission();
		}
		
	}, [hasPermission]);

	const fetchEmail = async () => {
		const emailtemp = await AsyncStorage.getItem('email');
		const e = replaceCharacters(emailtemp)

		setEmail(e)
	}


	const device = useCameraDevice('back');
	const camera = useRef(null);

	const {navigate} = useNavigation();
	const Capture = async () => {
		const photo = await camera.current.takePhoto({
			// flash: 'on',
		});
		
		const result = await fetch(`file://${photo.path}`)
		
		const blobData = await result.blob();
		var x = 'file:///' + ((photo.path).replace('file://', ''));

		await readFile(x);
		blobData._data.binaryData = binaryBuffer;
		// console.log(blobData);

		// console.log(data);

		const serverUrl = 'http://my5ticr4v3n.pythonanywhere.com/extract-text';
		// const email = 'testing2_gmail_com';
		const requestData = {
			blobData: blobData,
			stringData: email
		  };

		  fetch(serverUrl, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestData)
		  })
		  .then(response => response.text())
		  .then(result => console.log(result))
		  .catch(error => console.error(error));
		navigate('ListView');
	};

	if (!device) {
		<Text>cameera not found</Text>;
	}

	const [isActive, setIsActive] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setIsActive(true);
		}, 500);
	}, []);

	return (
		<View style={styles.CameraView}>
			<Camera
				ref={camera}
				device={device}
				isActive={isActive}
				photo={true}
				style={StyleSheet.absoluteFill}
        exposure={3}
			/>
			<TouchableOpacity
				style={styles.shutter}
				onPress={ async ()=>{await Capture();
					// await imageToBase64();
				// await sendPostRequest();
				
				}}></TouchableOpacity>
		</View>
	);
};

const shutterSize = 80;

const styles = StyleSheet.create({
	CameraView: {
		flex: 1,

		justifyContent: 'flex-end',
	},
	shutter: {
		backgroundColor: 'white',
		height: shutterSize,
		width: shutterSize,
		alignSelf: 'center',
		marginBottom: '10%',
		borderRadius: shutterSize / 2,
		borderWidth: 2,
		borderColor: 'black',
	},
});

export default Scanner;
