import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    headinhWrapper:{
        marginTop:"10%",
        alignItems:"center",
    },
    heading:{
        fontSize:27,
        color:'#000000',
        fontFamily:"OpenSansBold"
    },
    profileContainer:{
        alignItems:"center",
        marginBottom:"5%",
        

    },
    profileImageStyle:{
        
        // width: "100%",
        borderRadius: 150 / 2,
        overflow: "scroll",
    },
    profileName:{
        fontFamily:"OpenSansBold",
        color:"black",
        fontSize:18,
        marginTop:"2%",
        // marginBottom:"10%"
        paddingTop:"2%",
        paddingBottom:"2%"
    },
    editProf:{

        justifyContent:"space-evenly",
        
        flexDirection:"row",
        
        
        
    }
    
});

export default styles