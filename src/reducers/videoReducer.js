import { SELECTED_VIDEO, SHUTTER_VIDEOS_SUCCESS } from "../constants/actionTypes";
import initState from "./initialState";

export default function(state=initState, action){
    switch(action.type){
        case SHUTTER_VIDEOS_SUCCESS:
        const newState = [...state, action.payload];
        return newState;

        case SELECTED_VIDEO:
        return { ...state, selectedVid: action.payload };

        default:
        return state;
    }
}