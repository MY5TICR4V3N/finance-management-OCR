import { StyleSheet } from "react-native";
import { PixelRatio } from "react-native";


const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;


const styles = StyleSheet.create({
	logo: {
		marginTop: '10%',
		height: "9%",
		width: "14%",
		alignSelf: 'center',
		resizeMode: 'contain',
	},
	loginWrapper: {
		marginLeft: "5%",
		// backgroundColor:"red",
		marginTop: "20%",
	},
	login: {
		fontSize: getFontSize(35),
		fontFamily: 'OpenSansSemiBold',
		color: 'black',
		marginBottom: "1%",
	},
	loginDesc: {
		fontFamily: 'OpenSans',
		fontSize: getFontSize(19),
		color: '#7C7C7C',
		marginBottom: "4%",
	},
	NamePass: {
		fontFamily: 'OpenSansBold',
		fontSize: getFontSize(18),
		color: '#7C7C7C',
	},
	forget: {
		fontStyle: 'italic',
		alignSelf: 'flex-end',
		fontFamily: 'OpenSansLight',
		marginTop: "4%",
		fontSize: getFontSize(17),
		marginRight: "2%",
	},
	buttonWrapper: {
		marginTop: "20%",
		marginLeft: "2%",
		marginRight: "2%",
	},

	lastText: {
		marginTop: "8%",
		alignSelf: 'center',
		fontFamily: 'OpenSansBold',
		color: '#181725',
		fontSize: 17,
	},
    pageWrapper:{
        flex:1,
        backgroundColor:"white"
    }
});

export default styles;