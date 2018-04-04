// src/reducer/index.js

import { combineReducers } from 'redux';
import counterReducer from './CounterReducer';

const counterApp = combineReducers({
    counterReducer
})

export default counterApp