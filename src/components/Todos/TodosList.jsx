import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchTodos, fetchDeleteTodo, fetchPutTodo } from '../../actions'

const style = {
  tr: {
    color: '#558b2f'
  },
  th: {
    textAlign: 'center',
    padding: 10
  },
  tdItem: {
    textAlign: 'center',
    padding: 0,
    width: '45%'
  },
  tdCheck: {
    textAlign: 'center',
    padding: 0
  }

}

class TodosList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentContentId: 0,
      currentCompletedId: 0
    }
    this.handleContentClick = this.handleContentClick.bind(this)
  }

  handleContentClick(id) {
    this.setState({
      currentContentId: id
    })
    const todo = document.getElementById(`todo-${id}`)
    setTimeout(() => {
      todo.children[1].children[0].children[0].children[0].focus()
    }, 100);
  }

  handleCompletedClick(id) {
    this.setState({
      currentCompletedId: id
    })
  }

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
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
            <tr id={`todo-${todo.id}`} key={todo.id}>
              <td style={style.th}>
                {todo.id}
              </td>
              <td style={style.tdItem}>
                <div onClick={() => this.handleContentClick(todo.id)} style={{padding: '20px 10px', height: '60px', width: '100%'}}>
                  {todo.id === this.state.currentContentId
                    ?<form onSubmit={e => e.preventDefault()} style={{margin:0, padding:0, marginTop: '-12px'}}>
                      <input
                        style={{textAlign: 'center', margin: 0, padding: 0}}
                        onBlur={(e) => {
                          this.props.fetchPutTodo(todo.id, e.target.value, todo.completed)
                          this.setState({
                            currentContentId: 0
                          })
                        }}
                        defaultValue={todo.content}
                      />
                    </form>
                    :
                    <div style={{ width: '100%'}}>
                      { todo.content }
                    </div>
                  }
                </div>
              </td>
              <td style={style.tdCheck}>
                <form>
                  <input
                    onChange={(e) => {
                      e.preventDefault()
                      this.props.fetchPutTodo(todo.id, todo.content, !todo.completed)
                    }}
                    id={`todo-check-${todo.id}`}
                    type="checkbox"
                    className="filled-in"
                    checked={todo.completed ? true : ''}
                  />
                  <label htmlFor={`todo-check-${todo.id}`}></label>
                </form>
              </td>
              <td style={style.th}>
                <button
                  type='button'
                  className='btn red darken-4'
                  onClick={e => {
                    e.preventDefault();
                    this.props.fetchDeleteTodo(todo.id)
                  }}
                >
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


// yg kiri: fungsi kita sendiri dengan nama bebas
// yg kanan: hasil import dari action
const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  fetchDeleteTodo: (id) => dispatch(fetchDeleteTodo(id)),
  fetchPutTodo: (id, content, completed) => dispatch(fetchPutTodo(id, content, completed))
})

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  fetchTodos: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
