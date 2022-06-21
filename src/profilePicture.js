import React,{Component} from "react";
import { ImageBackground, StyleSheet,} from "react-native";
import images from "./config/images";

class ProfilePicture extends Component{
    render(){
        return <ImageBackground source={images.background} style={styles.background}/>
    }
}


const styles=StyleSheet.create({
    background:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"center"
    },
});

export default ProfilePicture;
