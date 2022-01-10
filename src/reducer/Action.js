import * as ActionTypes  from './ActionTypes';
import {baseUrl} from '../Shared/fetch'
//dishes
export  const fetchDishes=(dispatch)=>{
    dispatch(isLoading(true))   
    console.log('dishes')
    return fetch(baseUrl+'dishes')
        .then(response=> response.json())
        .then(dishes=> dispatch(addDishes(dishes)))
              
  
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
//comments
export const fetchComments=(dispatch)=>{
    console.log('comments')
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
}
export const addComments=comments=>({
    type:ActionTypes.ADD_COMMENTS,
    payload: comments
})
export const commentsFailed=errMess=>({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
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
// promos
export  const fetchPromos=(dispatch)=>{
    dispatch(isLoadingPromos(true))   
    console.log('promos')
    return fetch(baseUrl+'promotions')
        .then(response=> response.json())
        .then(promos=> dispatch(addPromos(promos)))
              
  
}
export const isLoadingPromos=()=>({ 
    type:ActionTypes.PROMOS_LOADING
})
export const promosFailed =(errMess)=>({
    type: ActionTypes.PROMOS_FAILED,
    payload:errMess
})
export const addPromos=(promos)=>({
    type: ActionTypes.ADD_PROMOS,
    payload:promos
})