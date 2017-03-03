import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchTodos, fetchDeleteTodo, fetchPutTodo } from '../../actions'

const style = {
  thId: {
    color: '#558b2f',
    textAlign: 'center',
    padding: '10px',
    width: '5%'
  },
  thContent: {
    color: '#558b2f',
    textAlign: 'center',
    padding: '10px'
  },
  thCheck: {
    color: '#558b2f',
    textAlign: 'center',
    padding: '10px',
    width: '1%'
  },
  thAction: {
    color: '#558b2f',
    textAlign: 'center',
    padding: '10px',
    width: '12%'
  },
  tdId: {
    textAlign: 'center',
    padding: '10px'
  },
  tdContent: {
    textAlign: 'center',
    padding: 0,
    width: '45%'
  },
  tdCheck: {
    textAlign: 'center',
    padding: '0px 10px'
  },
  divContent: {
    padding: '20px 10px',
    height: '60px',
    width: '100%'
  },
  formContent: {
    margin: 0,
    padding: 0,
    marginTop: '-12px'
  },
  inputContent: {
    textAlign: 'center',
    margin: 0,
    padding: 0
  },
  labelCheck: {
    height: '14.5px',
    padding: '0px 11px'
  }
}

class TodosList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentContentId: 0
    }
    this.handleContentClick = this.handleContentClick.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
  }

  handleContentChange(event) {
    this.setState({
      currentContentText: event.target.value
    })
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

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th style={style.thId}>
              No
            </th>
            <th style={style.thContent}>
              Content
            </th>
            <th style={style.thCheck}>
              Completed
            </th>
            <th style={style.thAction}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.todos.map((todo) => (
            <tr id={`todo-${todo.id}`} key={todo.id}>
              <td style={style.tdId}>
                {todo.id}
              </td>
              <td style={style.tdContent}>
                <div onClick={() => this.handleContentClick(todo.id)} style={style.divContent}>
                  {todo.id === this.state.currentContentId
                    ?
                    <form
                      style={style.formContent}
                      onSubmit={e => {
                        e.preventDefault()
                        this.props.fetchPutTodo(todo.id, this.state.currentContentText, todo.completed)
                        this.setState({
                          currentContentId: 0
                        })
                      }}
                    >
                      <input
                        style={style.inputContent}
                        onBlur={(e) => {
                          this.props.fetchPutTodo(todo.id, e.target.value, todo.completed)
                          this.setState({
                            currentContentId: 0
                          })
                        }}
                        onChange={this.handleContentChange}
                        defaultValue={todo.content}
                      />
                    </form>
                    :
                    todo.content
                  }
                </div>
              </td>
              <td style={style.tdCheck}>
                <input
                  onChange={(e) => {
                    e.preventDefault()
                    this.props.fetchPutTodo(todo.id, todo.content, !todo.completed)
                  }}
                  checked={todo.completed ? true : ''}
                  type="checkbox"
                  className="filled-in"
                  id={`todo-check-${todo.id}`}
                />
                <label style={style.labelCheck} htmlFor={`todo-check-${todo.id}`}></label>
              </td>
              <td style={style.thAction}>
                <button
                  onClick={e => {
                    e.preventDefault();
                    this.props.fetchDeleteTodo(todo.id)
                  }}
                  type='button'
                  className='btn red darken-4'
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
