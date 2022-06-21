import update from "react-addons-update";
import constants from "./actionConstants";
import Geolocation from '@react-native-community/geolocation';
import { Dimensions } from "react-native";
import RNGooglePlaces from "react-native-google-places";

const {
	GET_CURRENT_LOCATION, 
	GET_INPUT, 
	TOGGLE_SEARCH_RESULT, 
	GET_ADDRESS_PREDICTIONS } = constants;

const {width, height} = Dimensions.get("window");
const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.922;
const LONGITUDE_DELTA= ASPECT_RATIO*LATITUDE_DELTA;

const ASPECT_RATION = width / height;

export function getCurrentLocation(){
	return(dispatch)=>{
		Geolocation.getCurrentPosition(
			(position)=>{
				dispatch({
					type:GET_CURRENT_LOCATION,
					payload:position
				});
			},
			(error)=> console.log(error.message),
			{enableHighAccuracy: false, timeout: 100000, maximumAge: 10000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }
		);
	}
}

export function getInputData(payload){
	return{
		type:GET_INPUT,
		payload
	}
}

export function toggleSearchResultModal(payload){
	return{
		type:TOGGLE_SEARCH_RESULT,
		payload
	}
}

export function getAddressPrediction(){
	return(dispatch, store)=>{
		let userInput = store().home.resultTypes.pickUp ? store().home.inputData.pickUp : store().home.inputData.dropOff;
		RNGooglePlaces.getAutocompletePredictions(userInput, 
			{
				country:"LK"
			}
		)
		.then((results)=>
			dispatch({
				type:GET_ADDRESS_PREDICTIONS,
				payload:results
			})
		)
		.catch((error)=>console.log(error.message))
	};
}



function handleGetCurrentLocation(state, action){
	return update(state, {
		region:{
			latitude:{
				$set:action.payload.coords.latitude
			},
			longitude:{
				$set:action.payload.coords.longitude
			},
			latitudeDelta:{
				$set:LATITUDE_DELTA
			},
			longitudeDelta:{
				$set:LONGITUDE_DELTA
			}
		}
	})
}

function handleGetInputData(state, action){
	const { key, value} = action.payload;
	return update(state, {
		inputData:{
			[key]:{
				$set:value
			}
		}
	})
}

function handleToggleSearchResult(state, action){
	if(action.payload === "pickUp"){
		return update(state, {
			resultTypes:{
				pickUp:{
					$set:true
				},
				dropOff:{
					$set:false
				}
			},
			predictions:{
				$set:{}
			}
		});
	}
	if(action.payload === "dropOff"){
		return update(state, {
			resultTypes:{
				pickUp:{
					$set:false
				},
				dropOff:{
					$set:true
				}
			},
			predictions:{
				$set:{}
			}
		});
	}
}

function handleGetAddressPredictions(state, action){
	return update(state, {
		predictions:{
			$set:action.payload
		}
	})
}

// const {SET_NAME} = constants;
// export function setName(){
//     return{
//         type:SET_NAME,
//         payload:"Randika"
//     }
// }

// function handleSetName(state, action){
//     return update(state, {
//         name:{
//             $set:action.payload
//         }
//     })
// }

const ACTION_HANDLERS = {
    GET_CURRENT_LOCATION:handleGetCurrentLocation,
	GET_INPUT:handleGetInputData,
	TOGGLE_SEARCH_RESULT:handleToggleSearchResult,
	GET_ADDRESS_PREDICTIONS:handleGetAddressPredictions
};
const initialState = {
    region:{},
	inputData:{},
	resultTypes:{}
	
};

export function HomeReducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}