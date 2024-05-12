import React, {useState, useEffect} from 'react';
import {
	SafeAreaView,
	StyleSheet,
	View,Text,
	ActivityIndicator,
	PixelRatio,
	ScrollView,
} from 'react-native';
import WhiteStatus from '../components/WhiteStatus';
import ListHead from '../components/ListHead';
import DropDownPicker from 'react-native-dropdown-picker';
import {PieChart} from 'react-native-gifted-charts';
import firestore from '@react-native-firebase/firestore';

import Icon from 'react-native-vector-icons/FontAwesome';

// import { ProgressBar } from 'react-native-paper';


const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

function replaceCharacters(str) {
	return str.replace(/[@.]/g, '_');
}

const colours = ['#FF5733', '#3366FF', '#33FF77', '#FFFF33'];

const Expense = ({navigation, route}) => {

	const [loading, setLoading] = useState(true);

	const Space = ' ';

	const {email} = route.params;

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('this month');
	const [items, setItems] = useState([
		{label: 'This month', value: 'this month'},
		{label: 'All time', value: 'all time'},
	]);
	const [pieData, setPieData] = useState([]);
	const [render, updateRender] = useState(0);

	// let totalcal = 0 ;
	const [total,setTotal] = useState(0);

	const [entertainmentsDatas,setEntertainmentsDatas] = useState(null);
	const [foodDatas,setFoodDatas] = useState(null)
	const [medicineDatas,setMedicineDatas] = useState(null)
	const [othersDatas,setOthersDatas] = useState(null)



	// let totalcal = 0;

	const fetchData = async () => {
		// console.log("test of render")
		try {
			const documentSnapshot = await firestore()
				.collection('users')
				.doc(email)
				.get();
	
			if (documentSnapshot.exists) {
				let format = [];
				let i = 0;
				// console.log(documentSnapshot.data());
				// setDatas(documentSnapshot.data());
				
				for (const key in documentSnapshot.data()) {
					if (documentSnapshot.data().hasOwnProperty(key)) {
						if(key=="entertainments") {
							setEntertainmentsDatas(documentSnapshot.data()[key])
						} else if (key=="food") {
							setFoodDatas(documentSnapshot.data()[key])
						} else if (key=="medicine") {
							setMedicineDatas(documentSnapshot.data()[key])
						} else if (key=="others") {
							setOthersDatas(documentSnapshot.data()[key])
						}
						// 
						format.push({
							value: documentSnapshot.data()[key],
							color: colours[i],
						});
					}
					// totalcal = totalcal + documentSnapshot.data()[key];
					i = i + 1;
				}
				
				setPieData(format);
				// setTotal(totalcal);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			
		}
	
		setLoading(false); // Always set loading to false after fetching
	};
	
	useEffect(() => {
		fetchData();
		
	}, [render]);

	const tempfn=()=> {
		return (
		Number(total).toFixed(2));
	}


	useEffect(() => {
		setTotal((entertainmentsDatas+foodDatas+othersDatas+medicineDatas))
		setTotal(parseFloat(entertainmentsDatas+foodDatas+othersDatas+medicineDatas).toFixed(2))

		// console.log(typeof(total)); // Log the updated datas state
	}, [entertainmentsDatas,foodDatas,othersDatas,medicineDatas]);

	return (
		<SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
{/* 
{loading ? (
            // Render loading indicator while data is being fetched
            <ActivityIndicator size="large"style={{alignSelf:"center"}} color="black" />
        ) : (
            // Render components once data is fetched
            <> */}



			
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
						// placeholderStyle={
						// 	styles.dropDownPlaceHolderStyle
						// }
						textStyle={styles.dropDownPlaceHolderStyle}
					/>
				</View>

				<Icon
					style={{marginLeft: '8%'}}
					onPress={() => {
						updateRender(render+1);
					}}
					name="refresh"
					size={30}
					color="black"
				/>
			</View>

			<ScrollView
			// contentContainerStyle={{alignItems:"center",flexDirection:"column"}}
			>
				
				<View style={{alignSelf: 'center'}}>
				{/* <View > */}
					<PieChart
						donut
						

						radius={getFontSize(160)}
					
						data={pieData}
					/>
					
				</View>
			
				
				<View style={styles.TextContainer}>
			
					<View style={{alignSelf:"flex-start",minWidth:"50%"}} >
						<View style={{flexDirection:"row",marginBottom:"2%",alignItems:"center"}} >
							<Icon
							name="circle"
							size={getFontSize(25)}
							style={{paddingRight:"3%"}}
							color="#FFFF33"
							></Icon>
						<Text style={[styles.textStyle,{alignItems:"center",paddingBottom:"1%"}]} >entertainment   </Text>
						</View>
						<View style={{flexDirection:"row",marginBottom:"2%",}} >
						<Icon
							name="circle"
							size={getFontSize(25)}
							style={{paddingRight:"3%"}}
							color="#3366FF"
							></Icon>
							<Text style={[styles.textStyle,{paddingBottom:"1%"}]} >food </Text>
						</View  >
						<View  style={{flexDirection:"row",marginBottom:"2%"}} >
						<Icon
							name="circle"
							size={getFontSize(25)}
							style={{paddingRight:"3%"}}
							color="#33FF77"
							></Icon>
							<Text style={[styles.textStyle,{paddingBottom:"1%"}]} >medicine </Text>
						</View>
						<View  style={{flexDirection:"row",marginBottom:"2%"}} >
						<Icon
							name="circle"
							size={getFontSize(25)}
							style={{paddingRight:"3%"}}
							color="#ff5733"
							></Icon>
							<Text style={[styles.textStyle,]} >others </Text>
						</View>
				

				

					</View>
					<View style={{flexDirection:"column",flex:1,alignSelf:"flex-start"}} >
						
					<Text style={[styles.textStyle,{textAlign:"left",marginBottom:"2%",marginTop:"3%"}]} >{entertainmentsDatas} </Text>
					<Text style={[styles.textStyle,{textAlign:"left",marginBottom:"2%",paddingTop:"4%"}]} >{foodDatas}</Text>
					<Text style={[styles.textStyle,{textAlign:"left",marginBottom:"2%",paddingTop:"6%"}]} >{medicineDatas}</Text>
					<Text style={[styles.textStyle,{textAlign:"left",marginBottom:"2%",paddingTop:"5.5%"}]} >{othersDatas}</Text>
					</View>
				</View>
				<Text
				style={styles.totalStyle}
				>Total {total}</Text>

			

			</ScrollView>
{/* 
			</>
        )} */}
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
		maxWidth: '33%',
		// minWidth:"10%",
		// marginTop: '5%',
		alignSelf: 'center',
		// backgroundColor:"red",
		marginLeft: '14%',
	},
	dropDownAndRefresh: {
		marginTop: '5%',
		flexDirection: 'row',
		// backgroundColor:"yellow",
		justifyContent: 'center',
		marginBottom: '3%',
		alignItems: 'center',
	},
	dropDownPlaceHolderStyle: {
		fontSize: getFontSize(14),
		fontFamily:"OpenSansBold"
	},
	TextContainer :{
		marginHorizontal:"13%",
		marginTop:"10%",
		// backgroundColor:"red",
		flex:1,
		flexDirection:"row",
		alignItems:"center",
		// justifyContent:"center",
	},
	textStyle:{
		fontFamily:"OpenSansSemiBold",
		fontSize:getFontSize(20),
		color:"black"
		
	},
	totalStyle :{
		alignSelf:"center",
		fontFamily:"OpenSansBold",
		color:"black",
		fontSize:getFontSize(40),
		marginTop:"2%"
	}
});

export default Expense;
