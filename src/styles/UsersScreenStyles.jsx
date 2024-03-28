import { StyleSheet } from "react-native";

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
        marginBottom:260,
        flexDirection:"row",
        
    }
    
});

export default styles