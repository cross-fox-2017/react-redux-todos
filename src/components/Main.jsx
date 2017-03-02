import React from 'react'
import { connect } from 'react-redux'

const style = {
  td: {
    width: '50%'
  }
}

export const Main = (props) => {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return(
      <table className="table table-bordered">
        <thead>
          <th>Id</th>
          <th>Todo</th>
          <th>Completed</th>
          <th>Action</th>
        </thead>
        <tbody>
          props.todos.map((todo) => {
            return (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.content}</td>
                <td>{todo.completed}</td>
                <td style={style.td}><button type="submit" className="btn" onClick="">Update</button> | <button type="submit" className="btn" onClick="">Delete</button></td>
              </tr>
            )
          })
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

const mapDispatchToProps = (dispatch) => {
  fetchTodos: () => dispatch(fetchTodos)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
