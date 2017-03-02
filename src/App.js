import React, { Component } from 'react';
import './App.css';
import {Header, FormAdd, ItemList} from './Components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FormAdd />
        <ItemList />
      </div>
    );
  }
}

export default App;
