import React from "react";
import { View, Text } from "react-native";
import { MapContainer } from "./MapContainer";

class Home extends React.Component{


    componentDidMount(){
        this.props.getCurrentLocation();
    }
    render(){
        const region = {
            latitude:6.968610,
            longitude:80.783943,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421
        }
        

        



        return(
            
                <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
                    {this.props.region.latitude &&
                        <MapContainer region={this.props.region}
                        getInputData={this.props.getInputData}
                        toggleSearchResultModal={this.props.toggleSearchResultModal}
                        getAddressPrediction={this.props.getAddressPrediction} 
                        resultTypes={this.props.resultTypes} 
                        predictions={this.props.predictions}
                        />
                    }

                    
                
                    {/* <Text>Hello {this.props.name}</Text> */}
                </View>
            
            
        );
    }      
}

export default Home;