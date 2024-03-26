import React from 'react';
import {Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import {Snackbar} from 'react-native-paper';
import {Portal} from 'react-native-paper';
import {View, Text} from 'react-native';

const LoginButton = ({buttonName, navigation, email, password}) => {
	const [isVisible, setIsVisible] = useState(false);
	const onDismissSnackBar = () => setIsVisible(false);
	const onToggleSnackbar = () => setIsVisible(!isVisible);

	const CheckLogin = async () => {
		try {
			await auth().signInWithEmailAndPassword(
				email,
				password,
			);
			navigation.navigate('users');
		} catch (error) {
			// console.log(error);
			onToggleSnackbar();
		}
	};

	return (
		<View>
			<Button
				mode="outlined"
				buttonColor="#24A19C"
				textColor="white"
				height={60}
				labelStyle={{fontSize: 18}}
				style={{justifyContent: 'center'}}
				onPress={CheckLogin}>
				{buttonName}
			</Button>
			<Portal>
				<Snackbar
					visible={isVisible}
					onDismiss={onDismissSnackBar}>
					Invalid Email/Password
				</Snackbar>
			</Portal>
		</View>
	);
};

export default LoginButton;
