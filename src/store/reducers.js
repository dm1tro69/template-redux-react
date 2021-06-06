import {combineReducers} from "redux";
import {profileReducer as profile} from "./profile/reducer";

export const reducers = combineReducers({
    profile
})