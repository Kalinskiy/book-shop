import {combineReducers, createStore, applyMiddleware, compose} from 'redux'

import thunkMiddleWare from 'redux-thunk';
import {bookReducer} from "./books-reducer";
import {cartReducer} from "./cart-reducer";
import {filterReducer} from "./filter-reducer";

const reducers = combineReducers({
    books: bookReducer,
    cart: cartReducer,
    filter:filterReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// @ts-ignore
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));
