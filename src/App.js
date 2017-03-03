import React, { Component } from 'react'
import TodoTable from './components/TodoTable'
import TodoPreview from './components/TodoPreview'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="container">
          <TodoTable />
          <fieldset>
            <legend>Edit - preview</legend>
          <TodoPreview />
          </fieldset>
        </div>
      </div>
    )
  }
}

export default App;
