import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Portal, TextInput} from 'react-native-paper';
import {Dialog} from '@rneui/base';
import { firebase } from '@react-native-firebase/database';

function generateRandomWord() {
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var randomWord = '';
    for (var i = 0; i < 6; i++) {
        randomWord += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return randomWord;
}


const AddUsersButton = ({email,rerend}) => {
	const [AddMode, SetAddMode] = useState(false);
	const [text, setText] = useState('');
	const ToggleAddMode = () => {
		if (AddMode === false) {
			SetAddMode(true);
		} else {
			SetAddMode(false);
		}
		// console.log(AddMode);
	};


	const addProfilefucntion= async ()=> {

		try {
			keyToUpdate = generateRandomWord();
		
			const updateObject = {};
			updateObject[keyToUpdate] = text;
			console.log(text)
			const reference = firebase
				.app()
				.database(
					'https://famcart-be20c-default-rtdb.asia-southeast1.firebasedatabase.app/',
				)
				.ref(`/users/${email}/profiles`)
				.update(updateObject);

		} catch (error) {
			console.log(error);
		} finally {
			rerend();
			ToggleAddMode();
		}


			
			



		
	}
	return (
		<View>
			{/* <Portal> */}
				<Dialog
					isVisible={AddMode}
					overlayStyle={{
						backgroundColor: 'white',
						borderRadius:10
					}}
					onBackdropPress={ToggleAddMode}>
					<Dialog.Title
						titleStyle={{
							alignSelf: 'center',
						}}
						title="Add New User"
					/>
					<TextInput
						label="Profile Name"
						value={text}
						onChangeText={text =>
							setText(text)
						}
					/>
					<Button
					style={{marginTop:20,alignSelf:"center"}}
					mode= "contained"
					onPress={addProfilefucntion}
					buttonColor="#24A19C"
					>Add</Button>
				</Dialog>
			{/* </Portal> */}
			<Button
				mode="contained"
				onPress={() => {
					ToggleAddMode();
					setText("");
					// console.log(email)

				}}
				buttonColor="#24A19C">
				Add Users
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({});

export default AddUsersButton;
