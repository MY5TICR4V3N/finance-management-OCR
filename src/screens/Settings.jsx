import React from "react";
import { 
    SafeAreaView,
    View,
    Image,
    Text,
    PixelRatio,
    StyleSheet
 } from "react-native";
import WhiteStatus from '../components/WhiteStatus'
import { Divider } from "react-native-paper";
import BigButton from "../components/BigButton";
import SettingsItem from "../components/SettingsItem";



const Settings=({navigation})=>{
    return (
		<SafeAreaView style={{flex:1,flexDirection:"column",backgroundColor:"white"}}>
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
            <SettingsItem name={" Edit Avatar"} iconname={"edit"} />
            <Divider bold />
            <SettingsItem name={" Change User"} iconname={"users"}/>
            <Divider bold />
            <SettingsItem name={" Help"} iconname={"help-circle"}/>
            <Divider bold />
            <SettingsItem name={" About"} iconname={"info"}/>
            <Divider bold />
            <View style={styles.buttonWrapper}>
            <BigButton name={"Log out"}
            topage={'login'}
            navigation={navigation}
            />
            </View>
        
		</SafeAreaView>
    );
}

const styles= StyleSheet.create({
    headWrapper:{
        marginTop:"6%",
        marginLeft:"5%",
        flexDirection:"row",
        marginBottom:"4%"
    },
    imageStyle:{
        marginRight:"6%"
        
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
    buttonWrapper:{
        marginHorizontal:"4%",
        marginTop:"30%",
        flexDirection:"column",
        // backgroundColor:"red",
        
    }
})

export default Settings