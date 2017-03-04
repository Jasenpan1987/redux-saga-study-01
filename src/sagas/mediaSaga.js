import { put, call } from "redux-saga/effects";
import { flickrImages, shutterStockVideos } from "../Api/api";
import { 
    SEARCH_MEDIA_ERROR, SHUTTER_VIDEOS_SUCCESS,
    SELECTED_VIDEO, SELECTED_IMAGE, FLICKR_IMAGES_SUCCESS
} from "../constants/actionTypes";

// listens actions from watcher, and extract the payload from the action (keywords in this example)
// and runs the async code (call the api helpers), once it get the api promise fullfils, the searchMediaSaga
// will dispatch the four following actions to the reducer, and the reducer will continue with its logic
export function* searchMediaSaga({ payload }){
    console.log("payload", payload)
    try {
        const vids = yield call(shutterStockVideos, payload);
        const imgs = yield call(flickrImages, payload);

        console.log("before yield", vids)

        yield [
            put({ type: SHUTTER_VIDEOS_SUCCESS, payload: vids }),
            put({ type: SELECTED_VIDEO, payload: vids[0] }),
            put({ type: FLICKR_IMAGES_SUCCESS, payload: imgs }),
            put({ type: SELECTED_IMAGE, payload: imgs[0] })
        ];
    }catch(error){
        yield({ type: SEARCH_MEDIA_ERROR, payload: error });
    }
}


