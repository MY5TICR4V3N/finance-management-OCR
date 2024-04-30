import React from 'react';
import {Button} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import { Portal,Snackbar } from 'react-native-paper';
import { useState } from 'react';

const SignUpButton = ({email,password}) => {
    const [isVisible, setIsVisible] = useState(false);
	const [message,setMessage] = useState('');
	const onDismissSnackBar = () => setIsVisible(false);
	
	const SuccessPopup = () =>{ 
		setMessage("Registered successfully!");
		setIsVisible(!isVisible);
	}
	const AlreadyPopup = () =>{ 
		setMessage("Email already in Use!");
		setIsVisible(!isVisible);
	}
	const InvalidPopup = () =>{ 
		setMessage("Email address Invalid");
		setIsVisible(!isVisible);
	}

    const RegisterUser = async ()=>{
        try {
			await auth().createUserWithEmailAndPassword(
				email,
				password,
			);
			SuccessPopup();
		} catch (error) {
			if(error.code === 'auth/email-already-in-use'){
				AlreadyPopup();
			}
			if (error.code === 'auth/invalid-email') {
				InvalidPopup();
			  }
		}
    }



	return (
		<View style={styles.buttonWrapper}>
			<Button
				mode="outlined"
				buttonColor="#24A19C"
				textColor="white"
				height={60}
                onPress={RegisterUser}
				labelStyle={{fontSize: 18}}
				style={styles.buttonstyle}>
				Sign up
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
const styles = StyleSheet.create({
	buttonWrapper: {
		marginTop: "13%",
		marginHorizontal: "3%",        
	},
    buttonstyle: {
		justifyContent: 'center',
	},
});
export default SignUpButton;
