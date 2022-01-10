import { combineReducers } from "redux";
import { Dishes } from "./dishes";
import {Leaders} from './leader'
import { Promotions } from "./promotions";
import {Comments} from './comments'
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
 
const rootReducer=combineReducers({
    Dishes,
    Leaders,
    Promotions,
    Comments,
}, applyMiddleware(thunk, logger));
export default rootReducer