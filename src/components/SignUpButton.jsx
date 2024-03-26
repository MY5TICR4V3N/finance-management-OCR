import React from 'react';
import {Button} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

const SignUpButton = () => {
	return (
		<View style={styles.buttonWrapper}>
			<Button
				mode="outlined"
				buttonColor="#24A19C"
				textColor="white"
				height={60}
                
				labelStyle={{fontSize: 18}}
				style={styles.buttonstyle}>
				Sign up
			</Button>
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
