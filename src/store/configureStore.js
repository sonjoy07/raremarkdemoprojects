import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import userReducer from '../reducers/userReducer';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
// const composeEnhancers = compose; 
export default () => {
    const store = createStore(combineReducers({
        users : userReducer,
    }), composeEnhancers(applyMiddleware(thunk)));

    return store;
};
