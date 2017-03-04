import { fork } from "redux-saga/effects";
import watchSearchMedia from "./watcher";

export default function* startForman(){
    yield fork(watchSearchMedia, "searchMedia");
    // if have more than one watchers do this
    // yield fork([ watcher1, watcher2 ...])
};