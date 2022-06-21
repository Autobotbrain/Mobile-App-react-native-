/**
 * @format
 * Changing
 */






import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/main';



AppRegistry.registerComponent(appName, () => App);

// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View
// } from 'react-native';

// import App from "./src/main"; 
// export default class reactNative extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <App {...this.props} />
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });

// AppRegistry.registerComponent('reactNative', () => reactNative);
