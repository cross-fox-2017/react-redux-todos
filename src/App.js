import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Todo List CRUD</h2>
    </div>
    <div className="App-body">
      <Todos />
    </div>
  </div>
)

export default App;
