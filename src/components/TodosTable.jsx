import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos,deleteAsyncTodo,putDoneTodo,putTodo } from '../actions'
import loading from './loading.gif'


class TodosTable extends Component {
  constructor(){
    super()
    this.state = {
      editMode: false,
      editItem: '',
      currentEdit: ''
    }
  }

  handleChange(e) {
    this.setState({
      currentEdit: e.target.value
    })
  }

  handleEnter(e, todo) {
    if (e.keyCode === 13) {
      this.props.putTodo({
        id: this.state.editItem,
        title: this.state.currentEdit,
        done: todo.done
      })
      this.setState({
        editMode: false,
        currentEdit: ''
      })
    }
  }

  componentDidMount() {
    this.props.getTodos()
  }

  renderTable() {
    return this.props.todos.map(todo => {
      if (this.state.editMode && this.state.editItem === todo.id) {
        return (
          <tr key={todo.id}>
            <td><input onChange={this.handleChange.bind(this)} onKeyUp={(e) => this.handleEnter(e, todo)} type="text" value={this.state.currentEdit}/></td>
            <td><input onChange={() => this.props.putDoneTodo(todo)} type="checkbox" checked={todo.done}/></td>
            <td>
              <button onClick={() => this.setState({editMode: false})}>EDIT</button>
              <button onClick={() => this.props.deleteAsyncTodo(todo)}>DELETE</button>
            </td>
          </tr>
        )
      } else {
        return (
          <tr key={todo.id}>
            <td onDoubleClick={() => this.setState({editMode: true, currentEdit: todo.title, editItem: todo.id})}>{todo.title}</td>
            <td><input onChange={() => this.props.putDoneTodo(todo)} type="checkbox" checked={todo.done}/></td>
            <td>
              <button onClick={() => this.setState({editMode: true, currentEdit: todo.title, editItem: todo.id})}>EDIT</button>
              <button onClick={() => this.props.deleteAsyncTodo(todo)}>DELETE</button>
            </td>
          </tr>
        )
      }
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
  deleteAsyncTodo: todo => dispatch(deleteAsyncTodo(todo)),
  putDoneTodo: todo => dispatch(putDoneTodo(todo)),
  putTodo: todo => dispatch(putTodo(todo))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodosTable)
