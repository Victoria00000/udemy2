import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({

});

const middleware = { thunkMiddleware };

export const store = createStore(rootReducer,
    compose(applyMiddleware(...middleware), window.___REDUX_DEVTOOLS_EXTENSION__ && window.___REDUX_DEVTOOLS_EXTENSION__()));

