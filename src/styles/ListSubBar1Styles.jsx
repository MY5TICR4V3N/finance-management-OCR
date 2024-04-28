import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginTop: 20,
    },
    leftText: {
      textAlign: 'left',
      fontSize: 24,
      fontFamily: 'OpenSansBold',
      color: '#000000',
    },
    rightText: {
      textAlign: 'right',
      fontSize: 24,
      fontWeight: 'bold',
      color: '#24A19C',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      minWidth: 300, // Adjust the value according to your requirement
    },
    closeButton: {
      marginTop: 10,
      color: '#24A19C',
      textAlign: 'center',
    },
    modalHeading:{
      alignSelf:"center",
      marginBottom:15,
      fontFamily:"OpenSansBold",
      fontSize:29,
      color:"#000000"
    },
    close:{
      height:36,
      width:60,
      backgroundColor:"#EA6A6A",
      alignSelf:"center",
      borderRadius:10,
      marginTop:10,
      alignItems:"center",
      justifyContent:"center"
    },
    cathead :{
      fontFamily:"OpenSansBold",
      paddingLeft:"2%",
      color:"black",
      fontSize:17
    },
    eachCat :{
      fontFamily:"OpenSansBold",
      fontSize:19,
      color: '#24A19C',
      
    }
  });

  export default styles