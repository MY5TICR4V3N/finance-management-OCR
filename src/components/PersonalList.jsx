import React,{useState} from "react";
import { View } from "react-native";
import {CheckBox} from '@rneui/themed';



//styles 
import styles from '../styles/ListViewStyles';


const PersonalList = ({itemname})=> {

    const [ispressed, setpressed] = useState(false);
    return(
        <View style={{flexDirection: 'row'}}>
				<CheckBox
					checked={ispressed}
					onPress={() => {
						setpressed(!ispressed);
					}}
					style={styles.checkboxStyle}
					title={itemname}
					size={24}
					textStyle={styles.listTextStyle}
					containerStyle={{
						backgroundColor: 'transparent',
					}}
				/>
			</View>
    )
}

export default PersonalList