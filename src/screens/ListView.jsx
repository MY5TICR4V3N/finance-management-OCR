import React,{useState} from 'react';
import WhiteStatus from '../components/WhiteStatus';
import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
  FlatList,
} from 'react-native';
import ListHead from '../components/ListHead';
import ListSubBar from '../components/ListSubBar';
import { CheckBox } from '@rneui/themed';


//family list
const familydata = [{"itemf":"apple"},{"itemf":"cake"},{"itemf":"orange" }]
// personal list
const privatedata = [{"item":"water melon"},{"item":"water bottle"}]



const ListView = ({navigation}) => {


  const [ispressed,setpressed] = useState(false)


  const Structure =({itemname})=>{
    return(
      <View style={{flexDirection:"row",}}>
      <CheckBox
      checked={ispressed}
      onPress={()=>{setpressed(!ispressed)}}
      style={styles.checkboxStyle}
      title={itemname}
      size={24}
      textStyle={styles.listTextStyle}
      containerStyle={{backgroundColor:'transparent'}}
      />
      
    </View>
    )
  
  }


	return (
		<SafeAreaView style={{flex: 1,backgroundColor:"white"}}>
			<WhiteStatus />

			<ListHead topSpace={20} navigation={navigation}/>
			<ListSubBar leftText={'Family'} rightText={'Add item'} />
			<View style={styles.liststyle}>
				<FlatList data={familydata}
        renderItem={({item})=> <Structure itemname={item.itemf}/>}
        
        />
			</View>
			<ListSubBar leftText={'Personal'} rightText={'Add item'} />
			<View style={styles.liststyle}>
      <FlatList data={privatedata}
        renderItem={({item})=> <Structure itemname={item.item}/>}
        
        />

      </View>
      


		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
  liststyle:{
    backgroundColor:"#A0AAB852",
    minHeight:150,
    borderRadius:25,
    marginLeft:29,
    marginRight:28,
    padding:10
  },
  listTextStyle:{
    alignSelf:"center",
    fontFamily:"GentiumBold",
    fontSize:20,
    color:"#000000"

  },
  checkboxStyle:{
    // backgroundColor:"red"
    
  }
});

export default ListView;