import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchTodos, fetchDeleteTodos, fetchUpdateTodos } from '../../actions'

const style = {
  tr: {
    color: '#558b2f'
  },
  th: {
    textAlign: 'center'
  }
}

class TodosList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentId: 0,
      currentContent: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id, content) {
    this.setState({
      currentId: id,
      currentContent: content
    })
  }

  handleDoubleClick() {
    return (
      <form>
        <input>test</input>
      </form>
    )
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
            <tr key={todo.id}>
              <td style={style.th}>
                {todo.id}
              </td>
              <td style={style.th}>
                <div
                  onClick={() => this.handleClick(todo.id, todo.content)}
                >
                  {todo.id === this.state.currentId
                    ?<form>
                      <input
                        onBlur={e => {console.log(e.target.value);}}
                        defaultValue={todo.content}
                      />
                    </form>
                    :todo.content
                  }
                </div>
              </td>
              <td style={style.th}>
                <div
                  onClick={() => this.handleClick(todo.id, todo.content)}
                >
                  {JSON.stringify(todo.completed)}
                </div>
              </td>
              <td style={style.th}>
                <button
                  type='button'
                  className='btn red darken-4'
                  onClick={e => {
                    e.preventDefault();
                    this.props.fetchDeleteTodos(todo.id)
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

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  fetchDeleteTodos: (id) => dispatch(fetchDeleteTodos(id)),
  fetchUpdateTodos: (content) => dispatch(fetchUpdateTodos(content))
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
