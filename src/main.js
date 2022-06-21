

import React,{Component} from "react";
import { View,StyleSheet,Text, Button, TouchableOpacity, Image} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomePage from "./HomePage";
import ProfilePicture from "./profilePicture";
import ScrollList from "./listScroll";
import LoginPage from "./login";
import ChatPage from "./chat";
import Map from "./map";
import { Icon } from "@rneui/themed";
import { color } from "@rneui/base";
import AboutUs from "./AboutUs";

// import React from "react";

// import createStore from "./store/createStore";
// import AppContainer from "./AppContainer";
// export default class Root extends React.Component{
// 	renderApp(){
// 		const initialState = window.___INTITIAL_STATE__;
// 		const store = createStore(initialState);

// 		return (
// 			<AppContainer store={store} />

// 		);

// 	}

// 	render(){
// 		return this.renderApp();
// 	}
// }

function WelcomeScreen({navigation}) {
        return (
            <View style={styles.view}>
                {/* <View style={styles.circle}/> */}
                <Text style={styles.body1}>Welcome</Text>
                <Text style={styles.body2}>To</Text>
                <Text style={styles.body3}>Driver Booking</Text>
                <TouchableOpacity  style={styles.button} onPress={()=>navigation.navigate('LoginPage')}><Text style={styles.getStartFont}>Start</Text></TouchableOpacity>
            </View>  
        );

}




const Stack = createNativeStackNavigator(

);



class App extends Component{
    render() {
        return(
            
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerTitleStyle:{
                        color:"yellow",
                        fontWeight:"bold",
                        fontFamily:"roboto",
                        fontSize:20
                    },
                    headerTintColor:'yellow',

                    headerStyle:{
                        backgroundColor:'black',
                        
                    }
                }}>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Getting Started !' }} />
                    <Stack.Screen name="HomePage" component={HomePage} options={{
                        headerRight: () => (
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Icon name="home" size={25} color="yellow"/>
                            </View>
                        ),
                        title:"Home"
                    }}/>
                    <Stack.Screen name="ProfilePicture" component={ProfilePicture}/>
                    <Stack.Screen name="ScrollList" component={ScrollList} options={{
                        headerRight: () => (
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Icon name='sc-telegram'
                                    type='evilicon' size={30} color="yellow" />
                            </View>
                        ),
                        title: "Shedules"
                    }}/>
                    <Stack.Screen name="LoginPage" component={LoginPage} options={{
                        headerRight: () => (
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Icon name="login" size={25} color="yellow"/>
                            </View>
                        ),
                        title: "Login"
                    }} />
                    <Stack.Screen name="ChatPage" component={ChatPage} options={{
                        headerRight: () => (
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Image style={styles.image} source={require("./assets/images/Taxi.png")} />
                            </View>
                        ),
                        title:"Driver Chat"
                    }} />
                    <Stack.Screen name="Map" component={Map} options={{
                        headerRight: () => (
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Icon name="location-on" size={25} color="yellow"/>
                            </View>
                        ),
                        title: "location"
                    }}
                    />
                    <Stack.Screen name="AboutUs" component={AboutUs} options={{
                        headerRight: () => (
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Icon name="location-on" size={25} color="yellow"/>
                            </View>
                        ),
                        title: "help"
                    }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            

        );
    }
}



const styles =StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:"yellow",
        alignItems:"center",
        justifyContent:"center",

    },
    body1:{
        textAlign:"center",
        color:"black",
        fontSize:20
    },
    body2:{
        textAlign:"center",
        color:"black"
    },
    body3:{
        textAlign:"center",
        color:"black",
        fontSize:40,
        paddingBottom:50
    },
    body4:{
        padding:1,
        textAlign:"center",
        color:"black",
        fontSize:10,
        position:20
    },
    button:{
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "black",
        
    },
    background:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"center"
    },
    getStartFont:{
        color:"white",
        fontSize:15
    },
    circle:{
        width:500,
        height:500,
        borderRadius:500,
        backgroundColor:'#FFF',
        position:"absolute",
        left:-120,
        top:-20,
        opacity:0.3
    },
    image: {
        
        width:40,
        height:40,
        borderRadius:70
    }

})


export default App;

// export default createNativeStackNavigator(Stack);