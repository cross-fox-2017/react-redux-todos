import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchTodos } from '../../actions'

const style = {
  tr: {
    color: '#558b2f'
  },
  th: {
    textAlign: 'center'
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
            <th style={style.th}>
              No
            </th>
            <th style={style.th}>
              Content
            </th>
            <th style={style.th}>
              Completed
            </th>
            <th style={style.th}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.todos.map((todo) => (
             <tr key={todo.id}>
               <td style={style.th}>
                 <div>
                   {todo.id}
                 </div>
               </td>
               <td style={style.th}>
                 <div>
                   {todo.content}
                 </div>
               </td>
               <td style={style.th}>
                 <div>
                   {todo.completed}
                 </div>
               </td>
               <td style={style.th}>
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
