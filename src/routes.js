import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./containers/App";
import HomePage from "./components/HomePage";
import MediaGallery from "./containers/MediaGalleryPage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="library" component={MediaGallery} />
    </Route>
);