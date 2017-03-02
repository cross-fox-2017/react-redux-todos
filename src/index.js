import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducers from './reducers'

const createStoreMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreMiddleware(rootReducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
