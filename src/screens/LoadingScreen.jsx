
import React from 'react'
import { 
    StyleSheet,
    Text,
    SafeAreaView,

    StatusBar,
    Image
} from 'react-native'



const LoadingScreen= () => {
    return(
        <SafeAreaView style = {styles.body}>
            <StatusBar backgroundColor={"#24A19C"}/>
            <Image
            style = {styles.ImageStyle}
            source={require('../assets/images/LogoOnboarding.png')}
            />
            <Text style={styles.textstyle}>
                Famcart
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:"#24A19C",
        alignItems:"center",
        justifyContent:"center",

    },
    textstyle:{
        color:"#FFFFFF",
        fontFamily:"PatuaOne",
        fontSize:32,
    },
    ImageStyle:{

    }
   });

export default LoadingScreen