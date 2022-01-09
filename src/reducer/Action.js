import { DISHES } from '../Shared/Dishes';
import * as ActionTypes  from './ActionTypes';
export  const fetchDishes=(dispatch)=>{
    dispatch(isLoading(true))   
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}
export const isLoading=()=>({ 
    type:ActionTypes.DISHES_LOADING
})
export const dishesFailed =(errMess)=>({
    type: ActionTypes.DISHES_FAILED,
    payload:errMess
})
export const addDishes=(dishes)=>({
    type: ActionTypes.ADD_DISHES,
    payload:dishes
})

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});