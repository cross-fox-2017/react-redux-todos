import React, { Component } from 'react';
import TodoList from './TodoList.js';
import FormInput from './FormInput.js';

export class MainBody extends Component {
  render() {
    return (
      <div>
        <FormInput />
        <TodoList />
      </div>
    );
  }
}
