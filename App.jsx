import 'react-native-gesture-handler';

//do not remove this from the top

import React from 'react'

import GetStarted from './src/screens/GetStarted'
import LoadingScreen from './src/screens/LoadingScreen'
import SignUpPage from './src/screens/SignUpPage'
import LoginPage from './src/screens/LoginPage'
import UsersScreen from './src/screens/UsersScreen'
import TabNav from './src/navigation/TabNav';
import Settings from './src/screens/Settings';


//temp 
import Scanner from './src/screens/Scanner';

import { PaperProvider } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';


//navigation stuff
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const FinManagaer = () => {
	return (
		<PaperProvider
			settings={{
				icon: props => <AwesomeIcon {...props} />,
			}}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="first">
					<Stack.Screen
						name="first"
						component={GetStarted}
						options={{headerShown: false}}
					/>
					<Stack.Screen
						name="login"
						component={LoginPage}
						options={{headerShown: false}}
					/>
					<Stack.Screen
						name="users"
						component={UsersScreen}
						options={{headerShown: false}}
					/>
					<Stack.Screen
						name="list"
						component={TabNav}
						options={{headerShown: false}}
					/>
					<Stack.Screen
						name="setting"
						component={Settings}
						options={{headerShown: false}}
					/>
					<Stack.Screen
						name="signup"
						component={SignUpPage}
						options={{headerShown: false}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
			{/* <Scanner/> */}
		</PaperProvider>
	);
};

export default FinManagaer