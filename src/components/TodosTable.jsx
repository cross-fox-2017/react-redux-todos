import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodosTable extends Component {
  renderTable() {
    return this.props.todos.map((todo, index) => {
      return (
        <tr key={index}>
          <td>{todo.title}</td>
          <td><input type="checkbox" /></td>
          <td><button>EDIT</button><button>DELETE</button></td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div className="Todos-table">
        <table>
          <tr>
            <th>Todo</th>
            <th>Done</th>
            <th>Action</th>
          </tr>
          {this.renderTable()}
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosTable)
