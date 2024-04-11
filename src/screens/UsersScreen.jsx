import React, {useEffect,useState} from 'react';
import WhiteStatus from '../components/WhiteStatus';
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	FlatList,
	Image,
	TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../styles/UsersScreenStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/database';
import LoadingScreen from './LoadingScreen';

const data = [];

function replaceCharacters(str) {
	return str.replace(/[@.]/g, '_');
  }

const Item = ({username, navigation}) => {
	return (
		<View style={styles.profileContainer}>
			<View>
				<TouchableOpacity
					style={styles.profileImageStyle}
					onPress={() =>
						navigation.navigate('list')
					}>
					<Image
						source={require('../assets/images/defaultProfile.png')}
					/>
				</TouchableOpacity>
			</View>

			<Text style={styles.profileName}>{username}</Text>
		</View>
	);
};

const UsersScreen = ({navigation}) => {
	
	const [Loading,setLoading] = useState(true);

	const fetchData = async () => {
		try {
			let email = await AsyncStorage.getItem('email');
			email = replaceCharacters(email)
			console.log(email);
			const reference = firebase
				.app()
				.database(
					'https://famcart-be20c-default-rtdb.asia-southeast1.firebasedatabase.app/',
				)
				.ref(`/users/${email}/profiles`);
			await reference.once('value').then(snapshot => {
				const profiles = snapshot.val()
				console.log('User data: ', snapshot.val());
				data.length= 0;
				for (const key in profiles) {
					
					
					data.push({user:profiles[key]})
					
				  }
			});
		} catch (error) {
			console.error('Error fetching user data:', error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
			{Loading ? (
				<LoadingScreen />
			) : ( 
<View>
				<WhiteStatus />
				<View style={styles.headinhWrapper}>
					<Text style={styles.heading}>
						who's using?
					</Text>
				</View>
				<FlatList
					scrollEnabled={false}
					data={data}
					renderItem={({item}) => (
						<Item
							username={item.user}
							navigation={navigation}
						/>
					)}
					
					style={{
						alignSelf: 'center',
						marginTop: 60,
					}}
				/>
				<View style={styles.editProf}>
					<Button
						mode="contained"
						buttonColor="#24A19C">
						Remove Users
					</Button>
					<Button
						mode="contained"
						buttonColor="#24A19C">
						Add Users
					</Button>
				</View>
			</View>

			 )}
			
		</SafeAreaView>
	);
};
export default UsersScreen;
