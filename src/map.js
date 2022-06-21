// import React from "react";
// import { Image, ImageBackground, StyleSheet, View } from "react-native";

// export default function Map(){
//     return(
//         <View style={style.content}><Image  source={require("./assets/images/thumbnail.jpeg")}/></View>
        
//     );
// }
import React from "react";

import createStore from "./store/createStore";
import AppContainer from "./AppContainer";
export default class Map extends React.Component{
	renderApp(){
		const initialState = window.___INTITIAL_STATE__;
		const store = createStore(initialState);

		return (
			<AppContainer store={store} />

		);

	}

	render(){
		return this.renderApp();
	}
}