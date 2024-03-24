import React from "react";
import { Appbar } from 'react-native-paper';
import { Image,View } from 'react-native';
import Divider from "react-native-paper";

const SettingsItem=({name})=>{
    return (
		<View>
			<Appbar.Header>
				<Image
					source={require('../assets/images/profile.png')}
					style={{width: 24, height: 24 ,marginRight:10,marginLeft:10}}
				
				/>

				<Appbar.Content title={name} />
				<Appbar.Action
					icon="chevron-right"
					onPress={() => {}}
				/>
			</Appbar.Header>
		</View>
    );
}

export default SettingsItem