import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos,deletexTodo } from '../actions'
import loading from './loading.gif'


class TodosTable extends Component {
  componentDidMount() {
    this.props.getTodos()
  }

  renderTable() {
    return this.props.todos.map((todo, index) => {
      return (
        <tr key={index}>
          <td>{todo.title}</td>
          <td><input type="checkbox" /></td>
          <td><button>EDIT</button><button onClick={() => this.props.deletexTodo(todo)}>DELETE</button></td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="Todos-table">
        { this.props.todos.length === 0 ? <img className="loading" src={loading} alt="loading" /> : true }
        {<table>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Done</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTable()}
        </tbody>
      </table>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch(getTodos()),
  deletexTodo: (todo) => dispatch(deletexTodo(todo))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodosTable)
