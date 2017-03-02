import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchTodos } from '../actions'

const style = {
  td: {
    width: '50%'
  }
}

class Main extends Component {
  componentDidMount () {
    this.props.fetchTodos()
  }

  render () {
    return (
      <table className='table table-bordered container'>
        <br />
        <thead>
          <tr>
            <th>
              Id
            </th>
            <th>
              Todo
            </th>
            <th>
              Completed
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.todos.map((todo) => (
             <tr key={todo.id}>
               <td>
                 {todo.id}
               </td>
               <td>
                 {todo.content}
               </td>
               <td>
                 {todo.completed}
               </td>
               <td style={style.td}>
                 <button type='submit' className='btn' onClick=''>
                   Update
                 </button>
                 {' '}
                 <button type='submit' className='btn' onClick=''>
                   Delete
                 </button>
               </td>
             </tr>
           ))}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
