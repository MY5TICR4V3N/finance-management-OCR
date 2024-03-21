import React from "react";
import { Button } from "react-native-paper";


const BigButton =({name,topage,navigation})=>{
    return(
        <Button
        mode='outlined'
        buttonColor='#24A19C'
        textColor='white'
        height={60}
        labelStyle={{fontSize:18}}
        style={{justifyContent:"center"}}
        onPress={()=>navigation.navigate(topage)}
        >
            {name}
        </Button>
    )
}

export default BigButton