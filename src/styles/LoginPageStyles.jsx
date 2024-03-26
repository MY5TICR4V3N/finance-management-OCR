import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
	logo: {
		marginTop: '10%',
		height: 80,
		width: 80,
		alignSelf: 'center',
		resizeMode: 'contain',
	},
	loginWrapper: {
		marginLeft: 21,
		// backgroundColor:"red",
		marginTop: 66,
	},
	login: {
		fontSize: 35,
		fontFamily: 'OpenSansSemiBold',
		color: 'black',
		marginBottom: 5,
	},
	loginDesc: {
		fontFamily: 'OpenSans',
		fontSize: 19,
		color: '#7C7C7C',
		marginBottom: 18,
	},
	NamePass: {
		fontFamily: 'OpenSansBold',
		fontSize: 18,
		color: '#7C7C7C',
	},
	forget: {
		fontStyle: 'italic',
		alignSelf: 'flex-end',
		fontFamily: 'OpenSansLight',
		marginTop: 18,
		fontSize: 17,
		marginRight: 10,
	},
	buttonWrapper: {
		marginTop: 47,
		marginLeft: 10,
		marginRight: 10,
	},

	lastText: {
		marginTop: 15,
		alignSelf: 'center',
		fontFamily: 'OpenSansBold',
		color: '#181725',
		fontSize: 17,
	},
});

export default styles;