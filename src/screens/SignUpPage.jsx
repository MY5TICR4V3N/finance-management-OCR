
import React,{useState} from 'react'
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    
    Image
} from 'react-native'
import WhiteStatus from '../components/WhiteStatus'
import { TextInput,Button } from 'react-native-paper'






const SignUpPage= () => {
    const [isVisible,setIsVisible] = useState(false)

    const setVisiblity =()=> {
        setIsVisible(!isVisible);
    }
    return(
        <SafeAreaView style={{backgroundColor:"white"}}>
            <WhiteStatus/>
            <Image
                source={require('../assets/images/Carrot.png')}
                style={styles.logo}
            />
            <View style={styles.loginWrapper}>
                <Text style={styles.login}>
                    Sign Up
                </Text>
                <Text style={styles.loginDesc}>
                    Enter your credentials to continue
                </Text>
                <Text style={styles.NamePass}>
                    Username
                </Text>
                <TextInput/>
                <Text style={[styles.NamePass,{marginTop:9}]}>
                    Email
                </Text>
                <TextInput
                
                />                
                <Text style={[styles.NamePass,{marginTop:9}]}>
                Password
                </Text>
            <TextInput
            secureTextEntry={!isVisible}
            right={<TextInput.Icon icon={isVisible ? "eye-off" : "eye"} onPress={setVisiblity} />}
            />
                
                <Text style={styles.privpol}>
                By continuing you agree to our Terms of Service
and Privacy Policy.
                </Text>

            </View>
            <View style={styles.buttonWrapper}>
                <Button
                    mode='outlined'
                    buttonColor='#24A19C'
                    textColor='white'
                    height={60}
                    labelStyle={{fontSize:18}}
                    style={styles.buttonstyle}
                    // onPress={<LoginPage/>}
                    >
                        Log In
                    </Button>

            </View>
            <Text style={styles.lastText}>
                Already have an account?  
                <Text style={{color:"#53B175"}}> Log In</Text>
            </Text>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    logo:{
        marginTop:"10%",
         height:80,
         width:80,
        alignSelf:"center",
        resizeMode:"contain"
        
    },
    loginWrapper:{
        marginLeft:21,
        // backgroundColor:"red",
        marginTop:66,

    },
    login:{
        fontSize:35,
        fontFamily:"OpenSansSemiBold",
        color:"black",
        marginBottom:5    },
    loginDesc:{
        fontFamily:"OpenSansLightItalic",
        fontSize:19,
        color:"#7C7C7C",
        marginBottom:18,
        // fontStyle:"italic"
    },
    NamePass:{
        fontFamily:"OpenSansBold",
        fontSize:18,
        color:"#7C7C7C"
    },
    privpol:{
        // fontStyle:"italic",
        alignSelf:"flex-start",
        fontFamily:"OpenSansLightItalic",
        marginTop:18,
        fontSize:17,
        marginRight:10
    },
    buttonWrapper:{
        marginTop:47,
        marginLeft:10,
        marginRight:10
    },
    buttonstyle:{

        justifyContent:"center",


    },
    lastText:{
        marginTop:15,
        alignSelf:"center",
        fontFamily:"OpenSansBold",
        color:"#181725",
        fontSize:17
    }
   });

export default SignUpPage