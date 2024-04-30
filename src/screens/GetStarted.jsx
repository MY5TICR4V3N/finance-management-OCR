import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Dimensions,
	PixelRatio,
	ScrollView,
	Image,
} from 'react-native';
import {Button} from 'react-native';

import WhiteStatus from '../components/WhiteStatus';

const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const { width, height } = Dimensions.get('window');

const GetStarted = ({navigation}) => {
	return (
		<SafeAreaView
			style={[styles.container, {backgroundColor: 'white'}]}>
			<WhiteStatus />
			<ScrollView 
            contentContainerStyle={{alignItems:"center",flexDirection:"column"}}
            >
				<View style={[styles.header]}>
					<Text style={styles.headerText}>
						Welcome to
						<Text
							style={{
								color: '#24A19C',
							}}>
							{' '}
							Famcart
						</Text>
					</Text>
				</View>
				<Image
					source={require('../assets/images/StartedIllustration.png')}
					style={styles.ImageStyle}
				/>
				<Text style={styles.detailHead}>
					A goto shopping {'\n'} assistant
				</Text>
				{/* <Text style={styles.detailHead}>assistant</Text> */}
				<View style={styles.detailwrapper}>
					<Text style={styles.detail}>
						Here’s a mobile platform that
						helps you create a synchronized shopping list for
						and track your spending
						you and your family 
					</Text>
			
				</View>
				<View
					style={[
						styles.buttonView,
						{backgroundColor: 'red'},
					]}>
					<Button
						title="Get Started!"
						color={'#24A19C'}
						onPress={() => {
							navigation.navigate(
								'login',
							);
						}}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	header: {
		paddingTop: '9%',
		alignItems: 'center',
		marginTop: '5%',
	},
	headerText: {
		color: '#000000',
		fontFamily: 'OpenSansBold',
		fontSize: getFontSize(30),
	},
	ImageStyle: {
		marginTop: '12%',
        width: width * 0.5, // 80% of the screen width
          height: undefined, // Let the height scale automatically
          aspectRatio: 1, // Maintain aspect ratio
          resizeMode: 'contain', // Adjust the image size to fit the container
        
	},
	detailHead: {
		fontFamily: 'OpenSansSemiBold',
		color: '#1B1C1F',
		fontSize: getFontSize(26),
		marginTop: '2%',
		textAlign:"center"
	},
	detailwrapper: {
		// backgroundColor:"yellow",
		width: '90%',
		alignitems: 'center',
		justifyContent: 'center',
		marginTop: '8%',
	},
	detail: {
		alignSelf: 'center',
		fontFamily: 'OpenSans',
		color: 'black',
        textAlign:"center"
	},
	buttonView: {
		width: '80%',
		// justifyContent:"center",
		// alignItems:"center",
		marginTop: '10%',
		// alignSelf:"flex-end"
		// backgroundColor:"red",
	},
});

export default GetStarted;
