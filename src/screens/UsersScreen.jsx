
import React from 'react'
import WhiteStatus from '../components/WhiteStatus'
import { 
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity
 } from 'react-native'
import { Button } from 'react-native-paper'

const data = [
    {
        "id":"1",
        "user":"kashyap",

    },
    {
        "id":'2',
        "user":"alvis"
    },
    {
        "id":'3',
        "user":"akshay"
    }
]

const Item =({username,navigation}) => {
    return(
        <View style={styles.profileContainer}>
            <View>
                <TouchableOpacity style={styles.profileImageStyle}
                    onPress={()=>navigation.navigate('list')}
                >
                    <Image
                        source={require('../assets/images/defaultProfile.png')}
                        
                    />
                </TouchableOpacity>
            </View>
        
            <Text style={styles.profileName}>{username}</Text>
        </View>
    )

}

const UsersScreen= ({navigation}) => {
    return(
        <SafeAreaView style={{backgroundColor:"white"}}>
        <WhiteStatus/>
        <View style={styles.headinhWrapper}>
        <Text style={styles.heading}>
        who's using?
        </Text>
        </View>
        <FlatList
            data={data}
            renderItem={({ item }) => <Item username={item.user} navigation={navigation}/>}
            keyExtractor={item => item.id}
            style={{alignSelf:"center",marginTop:60}}
            />
        <View style={styles.editProf}>
            <Button
                mode='contained'
                buttonColor='#24A19C'
            >Remove Users</Button>
                        <Button
                mode='contained'
                buttonColor='#24A19C'
                
            >Add Users</Button>
        </View >
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    headinhWrapper:{
        marginTop:25,
        alignItems:"center"
    },
    heading:{
        fontSize:27,
        color:'#000000',
        fontFamily:"OpenSansBold"
    },
    profileContainer:{
        alignItems:"center",
        marginBottom:25,
        

    },
    profileImageStyle:{
        
        width: "100%",
        borderRadius: 150 / 2,
        overflow: "scroll",
    },
    profileName:{
        fontFamily:"OpenSansBold",
        color:"black",
        fontSize:18,
        marginTop:10
    },
    editProf:{
        justifyContent:"space-evenly",
        flexDirection:"row"
    }
    
});

export default UsersScreen