import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native'
import {Appbar} from 'react-native-paper';


const ListHead = ({navigation,topage,title}) => {
//   const {topSpace} = props;
  return (
    <View style={{marginTop: 20}}>
      {/* <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} /> */}
      <Appbar.Header mode="center-aligned" style={styles.barstyle}>
        <Appbar.Content title={title} titleStyle={styles.title} />

        <Appbar.Action icon={'gear'}  size={30} 
          onPress={() => navigation.navigate('setting')}
        />
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
