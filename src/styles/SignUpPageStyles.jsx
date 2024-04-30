import { StyleSheet } from "react-native";

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
		fontSize: 35,
		fontFamily: 'OpenSansSemiBold',
		color: 'black',
		marginBottom: "1%",
	},
	loginDesc: {
		fontFamily: 'OpenSansLightItalic',
		fontSize: 19,
		color: '#7C7C7C',
		marginBottom: "4%",
		// fontStyle:"italic"
	},
	NamePass: {
		fontFamily: 'OpenSansBold',
		fontSize: 18,
		color: '#7C7C7C',
	},
	privpol: {
		// fontStyle:"italic",
		alignSelf: 'flex-start',
		fontFamily: 'OpenSansLightItalic',
		marginTop: "3%",
		fontSize: 17,
		marginRight: "3%",
	},
	buttonWrapper: {
		marginTop: 47,
		marginHorizontal:10
	},

	lastText: {
		marginTop: "3%",
		alignSelf: 'center',
		fontFamily: 'OpenSansBold',
		color: '#181725',
		fontSize: 17,
	},
    pageWrapper:{
        flex:1,
        backgroundColor:"white"
    }
})
export default styles