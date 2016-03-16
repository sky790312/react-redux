//========= store part - 分離至ex: store/index.js=============//

import { createStore, combineReducers, applyMiddleware } from 'redux';

import delayMiddleware from 'middleware/DelayMiddleware';
import clickReducer from 'component/CountButton/reducer';

// deal with middleware
let createStoreWithMiddleware = applyMiddleware(delayMiddleware)(createStore);

// 合併 reducers
let reducers = combineReducers({
    clickState: clickReducer
});

export default createStoreWithMiddleware(reducers);
