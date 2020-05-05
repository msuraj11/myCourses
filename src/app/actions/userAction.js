import {loginUsers} from '../api/userActionApi';
import * as actionTypes from './actionTypes';

export const loginSuccess = (response) => {
    return {
        type: actionTypes.LOGIN_USER,
        response
    }
}

export const loginFailure = (err) => {
    return {
        type: actionTypes.LOGIN_USER,
        err
    }
}



export const loginUser = (userData) => {
    console.log(userData)
    return function (dispatch) {
        return loginUsers(userData).then((response)=> {
            dispatch(loginSuccess(response.data));
        }).catch(err =>{
            dispatch(loginFailure(err));
        });
    }
}
