import { PROMOTIONS } from '../Shared/Promotions'
import { LEADERS } from '../Shared/Leaders'
import { DISHES } from '../Shared/Dishes'
import {COMMENTS} from '../Shared/Comments'
export const initialState={
    DISHES,
    LEADERS, 
    COMMENTS, 
    PROMOTIONS
}
export const Reducer=(State=initialState,action)=>{
        
    return State
}