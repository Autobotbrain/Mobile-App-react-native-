import React from "react";
import { View, Text, SafeAreaView, TextInput} from "react-native";

import { ListItem, Button, Icon} from 'react-native-elements'

import { TouchableOpacity } from "react-native-gesture-handler";


import styles from "./SearchResultsStyles";



export const SearchResults = ({predictions})=>{



        console.log(predictions)

        return(
            
            <SafeAreaView style={styles.searchResultsWrapper}>
                <ListItem ><Button 
                    icon={<Icon name="location-on" size={25} color="white"/>} title="ListItem" /></ListItem>
                {/* <ListItem><TouchableOpacity><Text>ListItem</Text><Icon name="location-on"/></TouchableOpacity></ListItem> */}
                <ListItem><Text>ListItem</Text></ListItem>
            </SafeAreaView>
            
            
        );     
}

export default SearchResults;