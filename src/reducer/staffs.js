import * as ActionTypes from './ActionTypes';


export const staffs = (state = {
    isLoading: true,
    errMess: null,
    staffs: []
}, action) => {
    switch (action.type) {
        case ActionTypes.STAFFS_ADD:
            return { ...state, isLoading: false, errMess: null, staffs: action.payload };

        case ActionTypes.STAFFS_LOADING:
            return { ...state, isLoading: true, errMess: null, staffs: [] }

        case ActionTypes.STAFFS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        case ActionTypes.STAFFS_PLUS:

            return { ...state, isLoading: false, errMess: null,staffs: action.payload }

        case ActionTypes.STAFFS_DELETE:

            const newState = state.staffs.filter(data => { return data.id !== parseInt(action.payload) })
            console.log(newState)
            return { ...state,isLoading: false, errMess: null, staffs: newState }
        case ActionTypes.STAFFS_UPDATE:

            return { ...state, staffs: action.payload }
        default:
            return state;
    }
};



