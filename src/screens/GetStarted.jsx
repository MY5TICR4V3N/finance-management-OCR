
import React from 'react'
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Image
} from 'react-native'
import { Button } from 'react-native'


const GetStarted= () => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"}/>
            <View style={[styles.header]}>
                <Text style={styles.headerText}>
                    Welcome to 
                    <Text style={{color:"#24A19C"}}> Famcart</Text>
                </Text>

            </View>
            <Image
                    source={require('../assets/images/StartedIllustration.png')}
                    style = {styles.ImageStyle}
                />
            <Text style={styles.detailHead}>
                A goto shopping
            </Text>
            <Text style={styles.detailHead}>
                assistant
            </Text>
            <View style={styles.detailwrapper}>
                <Text style={styles.detail}>
                Here’s a mobile platform that helps you create a 
                </Text>
                <Text style={styles.detail}>
                synchronized shopping list for you and your family 
                </Text>
                <Text style={styles.detail}>
                 and track your spending
                </Text>
            </View>
            <View style={styles.buttonView}>
                <Button
                    title='Get Started!'
                    color={"#24A19C"}
                />
            </View>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        // justifyContent:"center"
        
    },
    header:{
        paddingTop:40,
        alignItems:"center",
        marginTop:21,
        
        
        
    },
    headerText:{
        color:"#000000",
        fontFamily:"OpenSansBold",
        fontSize:30,

    },
    ImageStyle:{
        marginTop:110
    },
    detailHead:{
        fontFamily:"OpenSansSemiBold",
        color:"#1B1C1F",
        fontSize:26,
        marginTop:5
    },
    detailwrapper:{
        // backgroundColor:"yellow",
        width:"90%",
        alignitems:"center",
        justifyContent:"center",
        marginTop:2
    },
    detail:{
        alignSelf:"center",
        fontFamily:"OpenSans",
        color:"black"
    },
    buttonView:{
        width:"80%",
        
        marginTop:50,
        backgroundColor:"red",
    },

   });

export default GetStarted