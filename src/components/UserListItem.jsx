import { useEffect } from "react"; 
import React from "react";
import { TouchableOpacity,View,Image,Text } from "react-native";
import styles from '../styles/UsersScreenStyles';
import { firebase } from '@react-native-firebase/database';

const UserListItem = ({username, navigation,RemoveMode,delfn,email}) => {

    const PressAction=()=>{
        if(!RemoveMode) {
            navigation.navigate('list',{email : email});
            
        }  else {
            // console.log(username);
            // removeFromDB();
            delfn(username);
        }
    }

 
    // console.log(RemoveMode)
	return (
<View style={styles.profileContainer}>

       
            <TouchableOpacity
                style={[styles.profileImageStyle,{}]}
                onPress={() => {PressAction()}}>
                <Image
                    source={require('../assets/images/defaultProfile.png')}
                />
            </TouchableOpacity>
            <Text style={[styles.profileName]}>{username}</Text>
       
  
</View>
	);
};

export default UserListItem