import React,{useState} from "react";
import { View } from "react-native";
import {CheckBox} from '@rneui/themed';


import {Dialog} from '@rneui/base';
import { TextInput,Button } from 'react-native-paper';

//realtime db and firestore
import { firebase } from '@react-native-firebase/database';
// import {firestore} from '@react-native-firebase/firestore';
//styles 
import styles from '../styles/ListViewStyles';


const FamilyList = ({itemname,email})=> {

    const [ispressed, setpressed] = useState(false);
	const [strikeThrough,setStrikeThrough] = useState('none');


	const [isVisible,setVisible] = useState(false);


	const pressaction = () => {
		setpressed(!ispressed);
		// setVisible(true);
		const itemsRef = firebase
		.app()
		.database(
			'https://famcart-be20c-default-rtdb.asia-southeast1.firebasedatabase.app/',
		)
		.ref(`/users/${email}/items/`);

	itemsRef.once('value')
		.then(function (snapshot) {
			snapshot.forEach(function (childSnapshot) {
				var item = childSnapshot.val();
				// Check if the item's name matches the name you're looking for
				if (item.name === itemname) {
					// childSnapshot.ref
					// 	.remove()
					// 	.then(function () {
					// 		//   console.log("Node removed successfully!");
					// 	})
					// 	.catch(function (
					// 		error,
					// 	) {
					// 		//   console.error("Error removing node:", error);
					// 	});


					// item.category
					const userDocument = firestore()
						.collection('users')
						.doc(email)
						.get()
						;
					console.log(userDocument);

				}
			});
		})
		.catch(function (error) {
			console.error('Error retrieving data:', error);
		});


	}

	const longpressaction = () => {
		setStrikeThrough('line-through');
		// await
		const itemsRef = firebase
			.app()
			.database(
				'https://famcart-be20c-default-rtdb.asia-southeast1.firebasedatabase.app/',
			)
			.ref(`/users/${email}/items/`);

		itemsRef.once('value')
			.then(function (snapshot) {
				snapshot.forEach(function (childSnapshot) {
					var item = childSnapshot.val();
					// Check if the item's name matches the name you're looking for
					if (item.name === itemname) {
						// Change "apple" to the name of the item you're looking for
						// Remove the entire node
						childSnapshot.ref
							.remove()
							.then(function () {
								//   console.log("Node removed successfully!");
							})
							.catch(function (
								error,
							) {
								//   console.error("Error removing node:", error);
							});
					}
				});
			})
			.catch(function (error) {
				console.error('Error retrieving data:', error);
			});
	};





    return(
        <View style={{flexDirection: 'row'}}>
				<CheckBox
					checked={ispressed}
					onPress={() => {
						pressaction();
					}}
					onLongPress={() => {
						longpressaction();
					}}
					style={styles.checkboxStyle}
					title={itemname}
					size={24}
					textStyle={[styles.listTextStyle,{textDecorationLine: strikeThrough,}]}
					containerStyle={{
						backgroundColor: 'transparent',
					}}
				/>
				  <Dialog
					isVisible={isVisible}
					overlayStyle={{
						backgroundColor: 'white',
						borderRadius:10
					}}
					onBackdropPress={()=>{setVisible(false)}}
					>
					<Dialog.Title
						titleStyle={{
							alignSelf: 'center',
						}}
						title="Add New User"
					/>
					<TextInput
						label="Profile Name"
						// value={text}
						// onChangeText={text =>
						// 	setText(text)
						
					/>
					<Button
					style={{marginTop:20,alignSelf:"center"}}
					mode= "contained"
					
					buttonColor="#24A19C"
					>Add</Button>
				</Dialog>
			</View>
    )
}

export default FamilyList