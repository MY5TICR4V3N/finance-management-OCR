import React from 'react';
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
const data = [
	{
		id: '1',
		user: 'kashyap',
	},
	{
		id: '2',
		user: 'alvis',
	},
	{
		id: '3',
		user: 'akshay',
	},
];

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
	return (
		<SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
			<WhiteStatus />
			<View style={styles.headinhWrapper}>
				<Text style={styles.heading}>who's using?</Text>
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
				keyExtractor={item => item.id}
				style={{alignSelf: 'center', marginTop: 60}}
			/>
			<View style={styles.editProf}>
				<Button mode="contained" buttonColor="#24A19C">
					Remove Users
				</Button>
				<Button mode="contained" buttonColor="#24A19C">
					Add Users
				</Button>
			</View>
		</SafeAreaView>
	);
};
export default UsersScreen;
