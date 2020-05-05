import * as actionTypes from '../actions/actionTypes';

const initialState = [];
export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_USER:
            return action.response;
        // case actionTypes.REGISTER_USER:
        //     return action.response;
        default:
            return initialState;    
    }
} 
export default userReducer;