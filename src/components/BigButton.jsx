import React from "react";
import { Button } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeLogIn = async (value) => {
	try {
	  await AsyncStorage.setItem('isLoggedIn', value);
	} catch (e) {
	  
	}
  };

const BigButton =({name,topage,navigation})=>{
    const logOut=()=>{
        storeLogIn("false");
        navigation.navigate("first")
    }
    return(
        <Button
        mode='outlined'
        buttonColor='#24A19C'
        textColor='white'
        height={60}
        labelStyle={{fontSize:18}}
        style={{justifyContent:"center"}}
        onPress={logOut}
        >
            {name}
        </Button>
    )
}

export default BigButton