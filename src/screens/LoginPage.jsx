import React from 'react';
import {
	ScrollView,
	Text,
	View,
	SafeAreaView,
	Image,
	PixelRatio,
} from 'react-native';
import WhiteStatus from '../components/WhiteStatus';
import {TextInput, Button} from 'react-native-paper';
import {useState} from 'react';

import LoginButton from '../components/LoginButton';
import styles from '../styles/LoginPageStyles';

const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const LoginPage = ({navigation}) => {
	const [isVisible, setIsVisible] = useState(false);
	//authentication stuff
	const [email, SetEmail] = useState('');
	const [password, SetPassword] = useState();
	// const [loading,setLoading] = useState(false)

	const setVisiblity = () => {
		setIsVisible(!isVisible);
	};
	return (
		<SafeAreaView style={styles.pageWrapper}>
			<WhiteStatus />
			<ScrollView>
				<Image
					source={require('../assets/images/Carrot.png')}
					style={styles.logo}
				/>
				<View style={styles.loginWrapper}>
					<Text style={styles.login}>LOGIN</Text>
					<Text style={styles.loginDesc}>
						Enter your Email and Password
					</Text>
					<Text style={styles.NamePass}>
						Email
					</Text>
					<TextInput
						value={email}
						style={{
							height: getFontSize(50),
						}}
						onChangeText={text =>
							SetEmail(text)
						}
					/>
					<Text
						style={[
							styles.NamePass,
							{marginTop: 9},
						]}>
						Password
					</Text>
					<TextInput
						secureTextEntry={!isVisible}
						value={password}
						style={{
							height: getFontSize(50),
						}}
						onChangeText={text =>
							SetPassword(text)
						}
						right={
							<TextInput.Icon
								icon={
									isVisible
										? 'eye-slash'
										: 'eye'
								}
								onPress={
									setVisiblity
								}
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
							navigation.navigate(
								'signup',
							)
						}
						style={{color: '#53B175'}}>
						{' '}
						Signup
					</Text>
				</Text>
			</ScrollView>
		</SafeAreaView>
	);
};
export default LoginPage;
