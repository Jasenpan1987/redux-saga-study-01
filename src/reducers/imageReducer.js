import initState from "./initialState";
import { FLICKR_IMAGES_SUCCESS, SELECTED_IMAGE } from "../constants/actionTypes";

export default function(state=initState, action){
    switch(action.type){
        case FLICKR_IMAGES_SUCCESS:
        return [...state, action.payload];

        case SELECTED_IMAGE:
        return { ...state, selectedImg: action.payload };

        default:
        return state;
    }
}