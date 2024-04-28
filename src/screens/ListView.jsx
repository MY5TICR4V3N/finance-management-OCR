import React, {useState,useEffect} from 'react';
import WhiteStatus from '../components/WhiteStatus';
import {
	// StyleSheet,
	SafeAreaView,
	View,
	// Text,
	FlatList,
	ScrollView,
} from 'react-native';
import ListHead from '../components/ListHead';
import ListSubBar from '../components/ListSubBar';
import {CheckBox} from '@rneui/themed';

//tab navigation
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';

//family list data
const familydata = [{item: 'apple'}, {item: 'cake'}, {item: 'orange'}];
// personal list data 
const privatedata = [{item: 'water melon'}, {item: 'water bottle'}];

//styles 
import styles from '../styles/ListViewStyles';

// family list
import FamilyList from '../components/FamilyList';

// personal list
import PersonalList from '../components/PersonalList';

//fire base and local storage imports
import { firebase } from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

function replaceCharacters(str) {
	return str.replace(/[@.]/g, '_');
  }


const ListView = ({navigation,route}) => {
	const [items,setItems] = useState([])
	
	const { email } = route.params;
	

	useEffect(() => {
		// Set up real-time listener for Firebase updates
		// const itemsRef = database(
		// 	'https://famcart-be20c-default-rtdb.asia-southeast1.firebasedatabase.app/',
		// ).ref('items');
		const itemsRef = firebase
			.app()
			.database(
				'https://famcart-be20c-default-rtdb.asia-southeast1.firebasedatabase.app/',
			)
			.ref(`/users/${email}/items/`);

		const handleData = snapshot => {
		  if (snapshot.val()) {
			const dataArray = Object.keys(snapshot.val()).map(key => ({ id: key, ...snapshot.val()[key] }));
			setItems(dataArray);
		  }
		};
	
		itemsRef.on('value', handleData);
	
		// Cleanup function to remove the listener when component unmounts
		return () => {
		  itemsRef.off('value', handleData);
		};
	  }, []);


	const TopName = ' ';
	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
			<WhiteStatus />

			<ListHead
				topage={'setting'}
				navigation={navigation}
				title={TopName.concat('List')}
			/>
      <ScrollView>
      <ListSubBar
				leftText={'Family'}
				rightText={'Add item'}
			/>
			<View style={styles.liststyle}>

				{/* code for the list */}
				<FlatList
				scrollEnabled={false}
					data={items}
					renderItem={({item}) => (
						<FamilyList
							itemname={item.name}
						/>
					)}
				/>
			</View>
			<ListSubBar
				leftText={'Personal'}
				rightText={'Add item'}
			/>
			<View style={styles.liststyle}>
				<FlatList
					data={privatedata}
					scrollEnabled={false}
					renderItem={({item}) => (
						<PersonalList
							itemname={item.item}
						/>
					)}
				/>
			</View>
      </ScrollView>

		</SafeAreaView>
	);
};
export default ListView;
