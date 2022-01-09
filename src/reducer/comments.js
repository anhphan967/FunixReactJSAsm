import {COMMENTS} from '../Shared/Comments'
import * as ActionTypes  from './ActionTypes';

export const Comments=(State=COMMENTS, action)=>{
    switch(action.type){
        case 'ADD_COMMENT':
            var comment = action.payload;
            comment.id = State.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return State.concat(comment);
        default:
            return State;
    }

}