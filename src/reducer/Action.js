import {ActionTypes}  from './ActionTypes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});