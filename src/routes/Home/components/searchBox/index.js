import React from "react";
import { View, Text, SafeAreaView, TextInput} from "react-native";

import styles from "./SearchBoxStyles";



export const SearchBox = ({getInputData, toggleSearchResultModal, getAddressPrediction})=>{

    function handleInput(key, val){
        getInputData({
            key,
            value:val
        });
        getAddressPrediction()
    }



        return(
            
            <SafeAreaView style={styles.searchBox}>

                <Text style={styles.label}>PICK UP</Text>
                <View style={styles.inputWrapper}>
                    {/* <Icon name="search" size={5} color="#FF5E3A" /> */}
                    <TextInput onFocus={()=>toggleSearchResultModal("pickUp")} style={styles.inputSearch} placeholder="Choose pick-up location" onChangeText={handleInput.bind(this, "pickUp")} />
                </View>

                <Text style={styles.label}>DROP OFF</Text>
                <View style={styles.inputWrapper}>
                    <TextInput onFocus={()=>toggleSearchResultModal("dropOff")} style={styles.inputSearch} placeholder="Choose drop-off location" onChangeText={handleInput.bind(this, "droppOff")}/>
                </View>
            </SafeAreaView>
            
            
        );     
}

export default SearchBox;