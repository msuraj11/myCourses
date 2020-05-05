import { createStore } from 'redux';
import rootReducer from '../../reducers';
import configureStore from '../../store/configureStore';
import * as userAction from '../../actions/userAction';

describe('When store is given', () => {
const initialState = [];
    it("should handle addItemToCart", () => {
        //const store = createStore(rootReducer, initialState);
        const store = configureStore(initialState);
        const response = {
            name:'suraj',
            password:'1234'
        };
        const action = userAction.loginSuccess(response);
        store.dispatch(action);
        const actual = store.getState();
        console.log(actual);
        expect(actual.user).toEqual(response);
    });

});