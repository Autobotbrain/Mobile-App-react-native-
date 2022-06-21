import React,{useState} from "react";
import { View,Text, ScrollView, StyleSheet } from "react-native";

export default function ScrollList({navigation}){
    const [SetPeople]=useState([
        {name:'Katubedda:       2.30pm',key:'1'},
        {name:'Office:       2.30pm',key:'2'},
        {name:'Petta:       2.30pm',key:'3'},
        {name:'School:       2.30pm',key:'4'},
        {name:'Maharagama:       2.30pm',key:'5'},
    ]);

    return(
        <View style={style.container}>
            <Text style={style.topic}>Ongoing Routes</Text>
            <ScrollView>
                {SetPeople.map((item)=>{
                    return(
                        <View key={item.key}  >
                            <Text style={style.item} onLongPress={()=>navigation.navigate("Map")}>{item.name}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const style= StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
        paddingHorizontal:20,
        backgroundColor:"white"
    },
    item:{
        marginTop:24,
        padding:50,
        fontSize:24,
        backgroundColor:'yellow',
    },
    topic:{
        alignContent:"center",
        textAlign:"center",
        margin:2,
        backgroundColor:"black",
        color:"yellow",
        fontSize:15
    }
})