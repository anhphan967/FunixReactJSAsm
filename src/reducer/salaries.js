import * as ActionTypes from './ActionTypes';

export const salaries = (state= {
    isLoading: true, errMess: null, salaries: []
}, action) => {
    switch (action.type) {
        case ActionTypes.SALARIES_LOADING:
            return {...state, isLoading: true, errMess: null, salaries: [] }
        case ActionTypes.SALARIES_FAILED:
            return {...state, isLoading: false, errMess: action.payload }
        case ActionTypes.SALARIES_ADD:
            return {...state, isLoading: false, errMess: null, salaries: action.payload }
        default: 
            return state
    }
}
