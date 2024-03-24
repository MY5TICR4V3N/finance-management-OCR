import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,Text } from "react-native";
import { List, Camera, PieChart } from "react-native-feather";

import ListView from "../screens/ListView";
import Scanner from "../screens/Scanner";
import Expense from "../screens/Expense";


const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="list"
      screenOptions={{
        tabBarStyle:styles.BarStyle,
		

      }}
    >
      <Tab.Screen
        name="ListView"
        component={ListView}
        options={{
          headerShown: false,
		  tabBarLabel:()=> null,
          tabBarIcon: () => <List color={"#24A19C"} height={30} width={30} />,
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{
          
          headerShown: false,
		  tabBarLabel:()=> null,
          tabBarIcon: () => <Camera color={"#24A19C"} height={30} width={30}  />,
        }}
      />
      <Tab.Screen
        name="Expense"
        component={Expense}
        options={{
          headerShown: false,
		  tabBarLabel:()=> null,
          tabBarIcon: () => <PieChart color={"#24A19C"} height={30} width={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  BarStyle: {
    // Add your header styles here
	backgroundColor:"#D9D9D9",
	height:70
  },
});

export default TabNav;