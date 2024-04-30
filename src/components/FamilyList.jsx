import React, {useState} from 'react';
import {View,Text} from 'react-native';
import {CheckBox} from '@rneui/themed';

import {Dialog} from '@rneui/base';
import {TextInput, Button} from 'react-native-paper';

//realtime db and firestore
import {firebase} from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
//styles
import styles from '../styles/ListViewStyles';

let newer = 0;

const FamilyList = ({itemname, email}) => {
	const [ispressed, setpressed] = useState(false);
	const [strikeThrough, setStrikeThrough] = useState('none');

	const [isVisible, setVisible] = useState(false);
	// const [catName, setCatname] = useState('');
	const [CatValue, setCatValue] = useState();
	const [price, setPrice] = useState();

	const pressaction = () => {
		setpressed(!ispressed);
		setVisible(true);
		setPrice('');
		setCatValue();
		newer = 0;
	};

	const completedAction = () => {
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

						const userDocument = firestore()
							.collection('users')
							.doc(email)
							.get()
							.then(
								documentSnapshot => {
									const userData =
										documentSnapshot.data();
									if (
										userData &&
										userData[
											item
												.category
										] !==
											undefined
									) {
										// console.log(
										// 	`${item.category}  pre value: `,
										// 	userData[
										// 		item
										// 			.category
										// 	],
										// );
										newer =
											Number(
												price,
											) +
											Number(
												userData[
													item
														.category
												],
											);
									

										// console.log(
										// 	`${item.category} new value: `,
										// 	newer,
										// );
										firestore()
											.collection(
												'users',
											)
											.doc(
												email,
											)
											.update(
												{
													[item.category]:
														newer,
												},
											);
									}
								},
							);
					}
				});
			})
			.catch(function (error) {
				console.error('Error retrieving data:', error);
			});
		setVisible(false);
	};

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

	return (
		<View style={{flexDirection: 'row',alignItems:"center",
		// backgroundColor:"red"
		}}>
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
				textStyle={[
					styles.listTextStyle,
					{textDecorationLine: strikeThrough},
				]}
				containerStyle={{
					backgroundColor: 'transparent',
					// borderWidth:0,
					// padding:0,
				}}
			/>
		
			
			<Dialog
				isVisible={isVisible}
				overlayStyle={{
					backgroundColor: 'white',
					borderRadius: 10,
				}}
				onBackdropPress={() => {
					setVisible(false);
					newer = 0;
					setpressed(false);
				}}>
				<Dialog.Title
					titleStyle={{
						alignSelf: 'center',
					}}
					title="Enter The Price"
				/>
				<TextInput
					label="Price"
					value={price}
					onChangeText={text => setPrice(text)}
				/>
				<Button
					style={{
						marginTop: "8%",
						alignSelf: 'center',
					}}
					mode="contained"
					onPress={() => {
						if (price == null) {
							setPrice('');
							setVisible(false);
						} else {
							completedAction();
						}
					}}
					buttonColor="#24A19C">
					Completed
				</Button>
			</Dialog>
		</View>
	);
};

export default FamilyList;
