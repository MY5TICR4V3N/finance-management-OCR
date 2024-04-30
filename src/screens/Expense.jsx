import React, {useState,useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, PixelRatio,Pressable} from 'react-native';
import WhiteStatus from '../components/WhiteStatus';
import ListHead from '../components/ListHead';
import DropDownPicker from 'react-native-dropdown-picker';
import { PieChart } from "react-native-gifted-charts";
import firestore from '@react-native-firebase/firestore';

import Icon from 'react-native-vector-icons/FontAwesome';




const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

function replaceCharacters(str) {
	return str.replace(/[@.]/g, '_');
  }


 

const colours = ["#FF5733","#3366FF","#33FF77","#FFFF33"]

const Expense = ({navigation,route}) => {
	const Space = ' ';

    const { email } = route.params;

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('this month');
	const [items, setItems] = useState([
		{label: 'this month', value: 'this month'},
		{label: 'all time', value: 'all time'},
	]);
    const [pieData,setPieData] = useState([]);
    const [render,updateRender] = useState();
   
    const fetchData=()=> {
        firestore().collection('users').doc(email).get()
        .then(documentSnapshot => {
            // console.log('User exists: ', documentSnapshot.exists);
        
            if (documentSnapshot.exists) {
            //   console.log('User data: ', documentSnapshot.data());


            let format = [];let i = 0;
            
              for (const key in documentSnapshot.data()) {
		
                if (documentSnapshot.data().hasOwnProperty(key)) {
					// console.log(key + ': ' + documentSnapshot.data()[key]);
                    // format.push({key:data[key]})
                    format.push({value:documentSnapshot.data()[key],color:colours[i]})
				}
                i = i + 1;
		}
        // console.log(format)

              setPieData(
              format
              )
            }
          });
    }


    useEffect(()=>{
       fetchData();
    },[render]);


	return (
		<SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
			<WhiteStatus />
			<ListHead
				navigation={navigation}
				topage={'setting'}
				title={Space.concat('Expense')}
			/>
			<View style={styles.dropDownAndRefresh}>
				<View style={styles.dropDownContainer}>
					<DropDownPicker
						open={open}
						value={value}
						items={items}
						setOpen={setOpen}
						setValue={setValue}
						setItems={setItems}
						placeholder={value}
						style={styles.dropDownStyles}
						placeholderStyle={
							styles.dropDownPlaceHolderStyle
						}
					/>
				</View>

				<Icon 
                style={{marginLeft:"8%"}}
                onPress={()=>{updateRender("jhvu");}}
                name="refresh" size={30} color="black" />
			</View>

			{/* <Pressable  
            onPress={()=>{get()}}
            style={{height:100,width:100,backgroundColor:"red"}}>

            </Pressable> */}
			<View style={{alignSelf: 'center'}}>
				<PieChart
					donut
					// isThreeD

					radius={getFontSize(160)}
					// textSize={20}
					// showTextBackground
					// textBackgroundRadius={26}
					data={pieData}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	dropDownStyles: {
		// borderWidth:0
		borderRadius: 30,
        // marginBottom:"20%"
	},
	dropDownContainer: {
		// marginHorizontal: '35%',
        maxWidth:"29%",
        // minWidth:"10%",
		// marginTop: '5%',
        alignSelf:"center",
        // backgroundColor:"red",
        marginLeft:"14%"
	},
    dropDownAndRefresh :{
        marginTop:"5%",
        flexDirection:"row",
        // backgroundColor:"yellow",
        justifyContent:"center",
        marginBottom:"3%",
        alignItems:"center"
        
    },
	dropDownPlaceHolderStyle: {
		fontSize: getFontSize(4),
	},
});

export default Expense;
