import React, {useEffect,useState} from 'react';
import WhiteStatus from '../components/WhiteStatus';
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	FlatList,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../styles/UsersScreenStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/database';
import LoadingScreen from './LoadingScreen';

import AddUsersButton from '../components/AddUsersButton';

import UserListItem from '../components/UserListItem';
const data = [];

function replaceCharacters(str) {
	return str.replace(/[@.]/g, '_');
  }

const UsersScreen = ({navigation}) => {
	
	const [Loading,setLoading] = useState(true);
	const [userData, setUserData] = useState([]);
	const [RemoveMode,SetRemoveMode] = useState(false)
	const [email,SetEmail] = useState();
	const [removeButtonColor,SetremoveButtonColor] = useState("#24A19C");

	const rerend=()=> {
		const copy = [...data]
		copy.push(null)
		setUserData(copy);
	}


	const fetchData = async () => {
		try {
			let email = await AsyncStorage.getItem('email');

			email = replaceCharacters(email);

			const reference = firebase
				.app()
				.database(
					'https://famcart-be20c-default-rtdb.asia-southeast1.firebasedatabase.app/',
				)
				.ref(`/users/${email}/profiles`);

			await reference.once('value').then(snapshot => {
				const profiles = snapshot.val();
	
				data.length = 0;
				for (const key in profiles) {
					data.push({user: profiles[key]});
				}
				setUserData(data);
			});
			SetEmail(email);
		} catch (error) {
			console.error('Error fetching user data:', error);
		} finally {
			setLoading(false);
		}
	};

	const removeData = async (DelUserName)=>{
		// console.log(DelUserName);

	 try {
		let email = await AsyncStorage.getItem('email');

			email = replaceCharacters(email);

			const reference = firebase
				.app()
				.database(
					'https://famcart-be20c-default-rtdb.asia-southeast1.firebasedatabase.app/',
				)
				.ref(`/users/${email}/profiles`);
			reference.orderByValue()
				.equalTo(DelUserName)
				.once('value', function(snapshot) {
					snapshot.forEach(function(childSnapshot) {
					  const key = childSnapshot.key;
					//   console.log('Key for value "' + DelUserName + '": ' + key);
					const childRef = firebase
					.app()
					.database(
						'https://famcart-be20c-default-rtdb.asia-southeast1.firebasedatabase.app/',
					)
					.ref(`/users/${email}/profiles/${key}`);
					childRef.remove()
						.then(() => {
						
							let position = data.findIndex((user => user.user === DelUserName));
							data.splice(position,1);
							rerend();
							
						  })

					});
				});
			
				
		
			
	 } catch(error) {
		console.log(error);
	 } finally {
		
	 }
	}


	useEffect(() => {
		fetchData();
	}, [userData]);

	const ToggleRemoveMode =() => {
		if(RemoveMode===false) {
			SetremoveButtonColor("#750d31")
			SetRemoveMode(true)
		} else {
			SetRemoveMode(false)
			SetremoveButtonColor("#24A19C")
		}
	}
	return (
		<SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
			<ScrollView>
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
					extraData={userData}
					data={data}
					renderItem={({item}) => (
						<UserListItem
							RemoveMode={RemoveMode}
							username={item.user}
							navigation={navigation}
							delfn={removeData}
							email={email}
						/>
					)}
					
					style={{
						alignSelf: 'center',
						marginTop: "15%",
					}}
				/>
				<View style={styles.editProf}>
					
					<Button
						mode="contained"
						onPress={ToggleRemoveMode}
						buttonColor={removeButtonColor}>
						Remove Users
					</Button>

					<AddUsersButton
					email={email}
					rerend={rerend}
					
					/>
				</View>
			</View>

			 )}
			</ScrollView>
		</SafeAreaView>
	);
};
export default UsersScreen;
