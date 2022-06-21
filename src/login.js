import React,{useState} from "react";
import { StatusBar } from "react-native";
import { StyleSheet, View,Image,TextInput,TouchableOpacity,Text} from "react-native";

export default function LoginPage({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <View style={styles.container}>
            <View style={styles.circle}/>
            <Image style={styles.image} source={require("./assets/images/Taxi.png")} />

            <StatusBar style="auto" />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="User Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("HomePage",{name:email})}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

        </View>
        

        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
        width:100,
        height:100,
        borderRadius:100/8
    },

    inputView: {
        backgroundColor: "#F4F5F7",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        borderColor:'#BAB7C3',
        borderWidth:StyleSheet.hairlineWidth,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
    height: 30,
    marginBottom: 30,
    color:'black'
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "black",
    },
    loginText:{
        color:"white",
        // fontFamily:"roboto"
    },
    circle:{
        width:500,
        height:500,
        borderRadius:500,
        backgroundColor:'#FFF',
        position:"absolute",
        left:-120,
        top:-20
    }
});