import React from "react";
import { 
    SafeAreaView,
    View,
    Image,
    Text,
    StyleSheet
 } from "react-native";
import WhiteStatus from '../components/WhiteStatus'
import { Divider } from "react-native-paper";
import BigButton from "../components/BigButton";
import SettingsItem from "../components/SettingsItem";

const Settings=({navigate})=>{
    return (
		<SafeAreaView style={{flex:1}}>
			<WhiteStatus />
			<View style={[styles.headWrapper]}>
				<View style={styles.imageStyle}>
					<Image
						source={require('../assets/images/profile.png')}
					/>
				</View>
				<View style={styles.textstyles} >
                    <Text
                        style={styles.textHead}
                    >Basil Jose</Text>
                    <Text
                        style={styles.textSubHead}
                    >basil@kashyap.com</Text>
                </View>
			</View>
            <Divider bold />
            <SettingsItem name={"Edit Avatar"} />
            <Divider bold />
            <SettingsItem name={"Change User"} />
            <Divider bold />
            <SettingsItem name={"Help"} />
            <Divider bold />
            <SettingsItem name={"About"} />
            <Divider bold />
            <View style={{marginHorizontal:20,marginTop:90}}>
            <BigButton name={"Log out"}/>
            </View>
        
		</SafeAreaView>
    );
}

const styles= StyleSheet.create({
    headWrapper:{
        marginTop:30,
        marginLeft:20,
        flexDirection:"row",
        marginBottom:15
    },
    imageStyle:{
        marginRight:30
        
    },
    textstyles:{
        alignItems:"flex-start",
        justifyContent:"center"
    },
    textHead:{
        fontFamily:"OpenSansSemiBold",
        fontSize:25,
        color:"#000000"
    },
    textSubHead:{
        fontFamily:"OpenSansItalic",
        color:"black",
        fontSize:16,

    },
    circularImage: {
        overflow: 'hidden',
      },
})

export default Settings