import React from "react";
import { Button } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PixelRatio } from "react-native";

const storeLogIn = async (value) => {
	try {
	  await AsyncStorage.setItem('isLoggedIn', value);
	} catch (e) {
	  
	}
  };


  // this is the log out button
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;

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
        
        height={"31%"}
        labelStyle={{fontSize:getFontSize(18)}}
        style={{justifyContent:"center"}}
        onPress={logOut}
        >
            {name}
        </Button>
    )
}

export default BigButton