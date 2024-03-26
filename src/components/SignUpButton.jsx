import React from 'react';
import {Button} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import { Portal,Snackbar } from 'react-native-paper';
import { useState } from 'react';

const SignUpButton = ({email,password}) => {
    const [isVisible, setIsVisible] = useState(false);
	const onDismissSnackBar = () => setIsVisible(false);
	const onToggleSnackbar = () => setIsVisible(!isVisible);

    const RegisterUser = async ()=>{
        try {
			await auth().createUserWithEmailAndPassword(
				email,
				password,
			);
			onToggleSnackbar();
		} catch (error) {
			
			
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
					Registered successfully!
				</Snackbar>
			</Portal>
		</View>
	);
};
const styles = StyleSheet.create({
	buttonWrapper: {
		marginTop: 47,
		marginHorizontal: 10,        
	},
    buttonstyle: {
		justifyContent: 'center',
	},
});
export default SignUpButton;
