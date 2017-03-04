import { combineReducers } from "redux";
import imgReducer from "./imageReducer";
import vidReducer from "./videoReducer";

export default combineReducers({
    imgs: imgReducer,
    vids: vidReducer
});