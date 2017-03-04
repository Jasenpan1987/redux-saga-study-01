import { SELECTED_IMAGE, SELECTED_VIDEO, SEARCH_MEDIA_REQUEST } from "../constants/actionTypes";

export const selectedImgAct = (image) => {
    return {
        type: SELECTED_IMAGE,
        payload: image
    }
}

export const selectedVidAct = (video) => {
    return {
        type: SELECTED_VIDEO,
        payload: video
    }
}

// the payload here is the keywords for searching
export const searchMediaAct = (payload) => {
    return {
        type: SEARCH_MEDIA_REQUEST,
        payload
    }
}