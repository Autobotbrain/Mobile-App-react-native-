import React from "react";
import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SearchBox from "../searchBox";
import SearchResults from "../SearchResults";
import styles from "./MapContainerStyles";

export const MapContainer = ({region, getInputData, toggleSearchResultModal, getAddressPrediction, resultTypes, predictions})=>{
    return(
        <View style={styles.container}>
            <MapView 
            provider={MapView.PROVIDER_GOOGLE} 
            style={styles.map} 
            region={region}
            >
                <MapView.Marker
                        coordinate={region}
                        pinColor="green"
                    />
                </MapView>

                <SearchBox 
                    getInputData={getInputData} 
                    toggleSearchResultModal={toggleSearchResultModal}
                    getAddressPrediction={getAddressPrediction}
                />
                {(resultTypes.pickUp || resultTypes.dropOff) &&
            <SearchResults predictions={predictions}/>
                }
        </View>
    )
}

export default MapContainer;