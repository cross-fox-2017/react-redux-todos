import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from '../reducers'
const createStoreMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreMiddleware(rootReducers)

export default store

/*
Cara lain:
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'
const middleware = applyMiddleware(thunk)

const store = createStore(rootReducer, compose(middleware, window.devToolsExtension ? window.devToolsExtension() : func => func))

export default store
*/
