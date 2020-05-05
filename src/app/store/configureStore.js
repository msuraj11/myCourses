import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (initialState) => {
    console.log(initialState)
    return createStore(rootReducer, initialState, applyMiddleware(thunk, reduxImmutableStateInvariant())); 
}
export default configureStore;