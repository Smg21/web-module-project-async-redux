// src/store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import memeReducer from './reducers/memeReducer';

const rootReducer = combineReducers({
  memes: memeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
