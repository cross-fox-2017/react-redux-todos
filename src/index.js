import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from './reducers'

const middleware = applyMiddleware(thunk)
const store = createStore(rootReducers, compose(middleware, window.devToolsExtension ? window.devToolsExtension() : func => func))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
