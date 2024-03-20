import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native'
import {Appbar} from 'react-native-paper';


const ListHead = ({topSpace}) => {
//   const {topSpace} = props;
  return (
    <View style={{marginTop: topSpace}}>
      {/* <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} /> */}
      <Appbar.Header mode="center-aligned" style={styles.barstyle}>
        <Appbar.Content title=" List" titleStyle={styles.title} />

        <Appbar.Action icon={'gear'} onPress={() => {}} size={30} />
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
    title:{
        fontSize:32,
        color:'#000000',
        fontFamily:"OpenSansBold",
        paddingTop:10
      },
      barstyle:{
        height:40,
        
      },
})
export default ListHead;
