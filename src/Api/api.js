const FLICKR_API_KEY = "<YOUR_OWN_API_KEY>";

import axios from "axios";

const basicParams = {
    headers: {
        Authorization: "Basic <YOUR_OWN_AUTH_STRING>"
    }
}

export function shutterStockVideos(searchQuery){
    const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/videos/search?query=${searchQuery}&page=1&per_page=10`;

    return axios.get(SHUTTERSTOCK_API_ENDPOINT, basicParams)
        .then(resp => resp.data.data.map(({ id, assets, description }) => {
            return {
                id,
                mediaUrl: assets.preview_mp4.url,
                description
            }
        })).catch(err => console.error(err))
}

export function flickrImages(searchQuery){
    const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`;

    return axios.get(FLICKR_API_ENDPOINT)
        .then(resp => resp.data.photos.photo.map(({farm, server, id, secret, title}) => {
            return {
                id,
                title,
                mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
            }
        })).catch(err => console.error(err))
}

