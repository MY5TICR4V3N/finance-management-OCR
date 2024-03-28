import React,{useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Snackbar,Portal,Button} from 'react-native-paper';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeLogIn = async (value) => {
	try {
	  await AsyncStorage.setItem('isLoggedIn', value);
	} catch (e) {
	  
	}
  };
  const storeEmail = async (value) => {
	try {
	  await AsyncStorage.setItem('email', value);
	} catch (e) {
	  
	}
  };

  

const LoginButton = ({buttonName, navigation, email, password}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [message,setMessage] = useState('');
	const onDismissSnackBar = () => setIsVisible(false);
	const onToggleSnackbar = () => {
		setMessage("Email is Invalid");
		setIsVisible(!isVisible);}

	const CheckLogin = async () => {
		try {
			await auth().signInWithEmailAndPassword(
				email,
				password,
			);
			storeLogIn("true");
			storeEmail(email);
			navigation.navigate('users');
		} catch (error) {
			if (error.code === 'auth/invalid-email') {
				console.log(error.code)
				onToggleSnackbar();
			  }
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
					{message}
				</Snackbar>
			</Portal>
		</View>
	);
};

export default LoginButton;
