import React from "react";
import { Platform,KeyboardAvoidingView,SafeAreaView,StyleSheet,View,Image ,Text } from "react-native";
import Fire from "./Fire";
import {GiftedChat} from 'react-native-gifted-chat';
import { Tile } from "@rneui/themed";
import { color, darkColors } from "@rneui/base";
import { colors } from "react-native-elements";

export default class ChatPage extends React.Component{
    
    state={
        messages:[]
    }
    
    get user(){
        return{
            _id:5,
            // _id:Fire.uid,
            // name:"jj",
            name:this.props.route.params
        }
    }

    componentDidMount(){
        console.log(Fire.uid),
        Fire.get(message=>
            this.setState(previous=>({
            messages:GiftedChat.append(message,message)
            }))
        )
    }
    componentWillUnmount(){
        Fire.off()
    }
    render(){
        const chat =<GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user}/>
        
        if(Platform.OS==="android"){
            return(
                <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={30} enabled>
                    <View style={styles.circle}></View>
                    
                    
                    {chat}

                </KeyboardAvoidingView>
            )
        }
        return  <SafeAreaView style={{flex:1}}>{chat}</SafeAreaView>
    }
}

const styles = StyleSheet.create({
    
    circle:{
        width:500,
        height:500,
        borderRadius:500,
        backgroundColor:'#FFF',
        position:"absolute",
        left:-120,
        top:-20
    },

    image: {
        margin: 20,
        width:60,
        height:60,
        borderRadius:100/8,
        marginLeft:10
    },
});
