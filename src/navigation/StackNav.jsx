import 'react-native-gesture-handler';

import React,{useState,useEffect} from 'react';

import GetStarted from '../screens/GetStarted'
import LoadingScreen from '../screens/LoadingScreen'
import SignUpPage from '../screens/SignUpPage'
import LoginPage from '../screens/LoginPage'
import UsersScreen from '../screens/UsersScreen'
import TabNav from '../navigation/TabNav';
import Settings from '../screens/Settings';

//storage stuff
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

 

const StackNav = () => {
    const [loginState, setLoginState] = useState("loading"); // Default loading state

    useEffect(() => {
        const getLogin = async () => {
            try {
                const value = await AsyncStorage.getItem('isLoggedIn');
                if (value === "true") {
                    setLoginState("users");
                } else {
                    setLoginState("first");
                }
            } catch (err) {
                console.log(err);
                setLoginState("first"); // Handle error by defaulting to "first" screen
            }
        };

        getLogin();
    }, []); 

    if (loginState === "loading") {
        return <LoadingScreen />; 
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={loginState}>
                <Stack.Screen
                    name="first"
                    component={GetStarted}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="login"
                    component={LoginPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="users"
                    component={UsersScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="list"
                    component={TabNav}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="setting"
                    component={Settings}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="signup"
                    component={SignUpPage}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNav;
