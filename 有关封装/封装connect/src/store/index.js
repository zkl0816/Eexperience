import React from 'react';
import {applyMiddleware} from 'React';
import createSaga from 'redux-saga';
import {listenAction} from './sagaName.js';
let sagaMiddleware = createSaga();

function Reducers(state={},action){
  return state;
}

let store=React.createStore(Reducers({count:0}),applyMiddleware(sagaMiddleware));

sagaMiddleware.run(listenAction);

export default store;