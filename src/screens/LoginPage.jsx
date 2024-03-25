import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import WhiteStatus from '../components/WhiteStatus';
import {TextInput, Button} from 'react-native-paper';
import {useState} from 'react';


import LoginButton from '../components/LoginButton';

const LoginPage = ({navigation}) => {
	const [isVisible, setIsVisible] = useState(false);
    //authentication stuff
    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState()
    // const [loading,setLoading] = useState(false)





	const setVisiblity = () => {
		setIsVisible(!isVisible);
	};
	return (
		<SafeAreaView style={{backgroundColor: 'white'}}>
			<WhiteStatus />
			<Image
				source={require('../assets/images/Carrot.png')}
				style={styles.logo}
			/>
			<View style={styles.loginWrapper}>
				<Text style={styles.login}>LOGIN</Text>
				<Text style={styles.loginDesc}>
					Enter your Email and Password
				</Text>
				<Text style={styles.NamePass}>Email</Text>
				<TextInput
                value={email}
                onChangeText={text => SetEmail(text)}
                />
				<Text style={[styles.NamePass, {marginTop: 9}]}>
					Password
				</Text>
				<TextInput
					secureTextEntry={!isVisible}
                    value = {password}
                    onChangeText={text => SetPassword(text)}
					right={
						<TextInput.Icon
							icon={
								isVisible
									? 'eye-slash'
									: 'eye'
							}
							onPress={setVisiblity}
						/>
					}
				/>
				<Text style={styles.forget}>
					Forgot Password?
				</Text>
			</View>
			<View style={styles.buttonWrapper}>
				<LoginButton
					buttonName={'Login'}
					email={email}
                    password={password}
					navigation={navigation}
                    
				/>
			</View>
			<Text style={styles.lastText}>
				Dont have an account?
				<Text
					onPress={() =>
						navigation.navigate('signup')
					}
					style={{color: '#53B175'}}>
					{' '}
					Signup
				</Text>
			</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	logo: {
		marginTop: '10%',
		height: 80,
		width: 80,
		alignSelf: 'center',
		resizeMode: 'contain',
	},
	loginWrapper: {
		marginLeft: 21,
		// backgroundColor:"red",
		marginTop: 66,
	},
	login: {
		fontSize: 35,
		fontFamily: 'OpenSansSemiBold',
		color: 'black',
		marginBottom: 5,
	},
	loginDesc: {
		fontFamily: 'OpenSans',
		fontSize: 19,
		color: '#7C7C7C',
		marginBottom: 18,
	},
	NamePass: {
		fontFamily: 'OpenSansBold',
		fontSize: 18,
		color: '#7C7C7C',
	},
	forget: {
		fontStyle: 'italic',
		alignSelf: 'flex-end',
		fontFamily: 'OpenSansLight',
		marginTop: 18,
		fontSize: 17,
		marginRight: 10,
	},
	buttonWrapper: {
		marginTop: 47,
		marginLeft: 10,
		marginRight: 10,
	},

	lastText: {
		marginTop: 15,
		alignSelf: 'center',
		fontFamily: 'OpenSansBold',
		color: '#181725',
		fontSize: 17,
	},
});

export default LoginPage;
