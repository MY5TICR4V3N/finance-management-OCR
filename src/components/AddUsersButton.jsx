import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Portal, TextInput} from 'react-native-paper';
import {Dialog} from '@rneui/base';
import { firebase } from '@react-native-firebase/database';

const AddUsersButton = ({email}) => {
	const [AddMode, SetAddMode] = useState(false);
	const [text, setText] = useState('');
	const ToggleAddMode = () => {
		if (AddMode === false) {
			SetAddMode(true);
		} else {
			SetAddMode(false);
		}
		console.log(AddMode);
	};


	const addProfilefucntion= async ()=> {

		con

		ToggleAddMode();
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
					onBackdropPress={addProfilefucntion}>
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
					onPress={ToggleAddMode}
					buttonColor="#24A19C"
					>Add</Button>
				</Dialog>
			{/* </Portal> */}
			<Button
				mode="contained"
				onPress={() => {
					ToggleAddMode();
					setText("");
					

				}}
				buttonColor="#24A19C">
				Add Users
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({});

export default AddUsersButton;
