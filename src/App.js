import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Form from './components/Form';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Todo List</h2>
          </div>
          <br />
            <div className="card" >
              <div className="card-block">
                <Form />
                <br />
                <List />
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
