import React, {useState} from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import WhiteStatus from '../components/WhiteStatus';
import {TextInput, Button} from 'react-native-paper';
import SignUpButton from '../components/SignUpButton';
import styles from '../styles/SignUpPageStyles';

const SignUpPage = ({navigation}) => {
	const [isVisible, setIsVisible] = useState(false);

	//authentication stuff
	const [email, SetEmail] = useState('');
	const [password, SetPassword] = useState();

	const setVisiblity = () => {
		setIsVisible(!isVisible);
	};
	return (
		<SafeAreaView style={styles.pageWrapper}>
			<WhiteStatus />
			<Image
				source={require('../assets/images/Carrot.png')}
				style={styles.logo}
			/>
			<View style={styles.loginWrapper}>
				<Text style={styles.login}>Sign Up</Text>
				<Text style={styles.loginDesc}>
					Enter your credentials to continue
				</Text>
				<Text style={styles.NamePass}>Username</Text>
				<TextInput />
				<Text style={[styles.NamePass, {marginTop: 9}]}>
					Email
				</Text>
				<TextInput
					value={email}
					onChangeText={text => SetEmail(text)}
				/>
				<Text style={[styles.NamePass, {marginTop: 9}]}>
					Password
				</Text>
				<TextInput
					secureTextEntry={!isVisible}
					value={password}
					onChangeText={text => SetPassword(text)}
					right={
						<TextInput.Icon
							icon={
								isVisible
									? 'eye'
									: 'eye-slash'
							}
							onPress={setVisiblity}
						/>
					}
				/>

				<Text style={styles.privpol}>
					By continuing you agree to our Terms of
					Service and Privacy Policy.
				</Text>
			</View>
			<SignUpButton email={email} password={password} />
			<Text style={styles.lastText}>
				Already have an account?
				<Text
					onPress={() => {
						navigation.navigate('login');
					}}
					style={{color: '#53B175'}}>
					{' '}
					Log in
				</Text>
			</Text>
		</SafeAreaView>
	);
};

export default SignUpPage;
