import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchTodos } from '../../actions'

const style = {
  tr: {
    color: '#558b2f'
  }
}

class TodosList extends Component {
  componentDidMount () {
    this.props.fetchTodos()
  }

  render () {
    return (
      <table className='table table-bordered'>
        <thead>
          <tr style={style.tr}>
            <th>
              No
            </th>
            <th>
              Content
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
               <td>
                 <button type='button' className='btn light-blue darken-3' onClick=''>
                   <i className='material-icons'>thumbs_up_down</i>
                 </button>
                 {' '}
                 <button type='button' className='btn red darken-4' onClick=''>
                   <i className='material-icons'>delete</i>
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

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      completed: PropTypes.string.isRequired
    })
  ).isRequired,
  fetchTodos: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
