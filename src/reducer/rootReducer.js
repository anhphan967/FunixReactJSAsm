import { combineReducers } from "redux";

import { Dishes } from "./dishes";
import {Leaders} from './leader'
import { Promotions } from "./promotions";
import {Comments} from './comments'
const rootReducer=combineReducers({
    Dishes,
    Leaders,
    Promotions,
    Comments,
});
export default rootReducer