import { createStore,applyMiddleware,combineReducers } from 'redux'
import  thunkMiddleware  from 'redux-thunk'
import createSagaMiddleware from '@redux-saga/core';
import {cartList,orderList} from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './saga/'

const reducer = combineReducers({
    cartList,
    orderList
})

const saga = createSagaMiddleware()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(saga, thunkMiddleware )))

saga.run(rootSaga)


store.subscribe(() => {
    localStorage.setItem('ordersList', JSON.stringify(store.getState().orderList.orders))
    localStorage.setItem('price', JSON.stringify(store.getState().orderList.total))
})



export default store