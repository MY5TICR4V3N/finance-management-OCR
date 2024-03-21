import React from "react";
import { Appbar } from 'react-native-paper';
import { Image,View } from 'react-native';
import Divider from "react-native-paper";

const SettingsItem=({name})=>{
    return (
		<View>
			<Appbar.Header>
				
                
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