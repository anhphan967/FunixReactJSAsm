
import { combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {staffs} from './staffs'
import {departments} from './departments'
import {salaries} from './salaries'

const rootReducer=combineReducers({
    staffs, 
    departments, 
    salaries,
}, applyMiddleware(thunk, logger));
export default rootReducer