import 'react-native-gesture-handler';

import React from 'react';

import GetStarted from '../screens/GetStarted'
import LoadingScreen from '../screens/LoadingScreen'
import SignUpPage from '../screens/SignUpPage'
import LoginPage from '../screens/LoginPage'
import UsersScreen from '../screens/UsersScreen'
import TabNav from '../navigation/TabNav';
import Settings from '../screens/Settings';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const StackNav = () => {
    return(
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
    )
}

export default StackNav