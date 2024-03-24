import React from "react";
import { SafeAreaView } from "react-native";
import WhiteStatus from "../components/WhiteStatus";
import ListHead from "../components/ListHead";

const Expense =({navigation})=>{
    const Space = " "
    return(
        <SafeAreaView style={{backgroundColor:"white"}}>
            <WhiteStatus/>
            <ListHead 
            navigation={navigation}
            topage={'setting'}
            
            title={Space.concat("Expense")} />

        </SafeAreaView>
    )
}

export default Expense