import * as types from '../../actions/actionTypes';
import * as userReducer from '../../reducers/userReducer';

describe('Given Cart Reducer: ', () => {
    describe('When reducer is called', () => {

        describe('When cart/state is empty', () => {
            it('should return "addItemToCart()" success new state', () => {
                const response = { status:'success' };
                const actionObj = { type: types.LOGIN_USER, response };
                expect(userReducer.userReducer([], actionObj)).toEqual(response);
            });
        });

     

        describe('when no action is matched', () => {
            it('should return default state', () => {
                const actionObj = { type: types.DEFAULT };
                expect(userReducer.userReducer([], actionObj)).toEqual([]);
            });
        });

    });
});