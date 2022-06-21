import React,{Component} from "react";
import { View,StyleSheet,Text, Button,Image, TouchableOpacity, ScrollView } from "react-native";

function HomePage({ route, navigation }) {
    
    const { name } = route.params;
    return (
        <View style={styles.view}>

            <View style={styles.circle}/>
            <Text style={styles.body1}>WELCOME!</Text>
            <Text style={styles.body2}>{name}</Text>
            
            
            <View><Image style={styles.image} source={require("./assets/images/profile-girl.png")} /></View>
            <ScrollView style={styles.scroll}>
            
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('ProfilePicture')}><Text style={styles.buttonText}>Edit Profile picture</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("ScrollList")}><Text style={styles.buttonText}>View Shedule</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("AboutUs")}><Text style={styles.buttonText}>Help</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.popToTop()}><Text style={styles.buttonText}>Logout</Text></TouchableOpacity>
            
            </ScrollView>
            <TouchableOpacity style={styles.continue} onPress={()=>navigation.navigate("ChatPage",name)}><Text style={styles.buttonText}>Chat</Text></TouchableOpacity>
        </View>
    );
}
const styles =StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#F4F5F7',
        alignItems:"center",
        justifyContent:"center",
        paddingTop:20,
        
    },
    body1:{
        textAlign:"center",
        color:"black",
        fontSize:20,
        marginBottom:20,
    },
    body2:{
        textAlign:"center",
        color:"black",
        fontSize:30,
        marginBottom:20,
        
    },
    
    button:{
        width: 200,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "black",
        
        
    },
    image:{
        width:200,
        height:200,
        borderRadius:100,
        borderColor:"yellow",
        borderWidth:10
    },
    buttonText:{
        color:"white"
    },
    scroll:{
        paddingHorizontal:70,
    },
    circle:{
        width:500,
        height:500,
        borderRadius:500,
        backgroundColor:'#FFF',
        position:"absolute",
        left:120,
        top:320
    },
    continue:{
        width:70,
        height:70,
        borderRadius:70/2,
        backgroundColor:'#9075E3',
        alignItems:'center',
        justifyContent:'center',
        left:150,
        top:-20
    }
})

export default HomePage;