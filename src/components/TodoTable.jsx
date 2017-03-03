import React, { Component , PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchTodo, addingTodo, displayActiveTodo ,Complete, unComplete, DeletingTodo } from '../actions'
import TodoTextInput from './TodoTextInput.jsx'
import TodoList from './TodoList.jsx'
import loading from '../loading.gif'


class TodoTable extends Component {


  componentDidMount(){

    this.props.fetchTodo()
  }

  render () {
      return (
          this.props.todos.length < 1 ? <img src={loading} role="presentation"></img> :
        <div>
        <table className="highlight">
          <thead>
            <tr>
               <th data-field="id">Id</th>
                <th data-field="todo">Todo</th>
                <th data-field="status">Status</th>
            </tr>
          </thead>
          <TodoList
            todos={this.props.todos}
            displayActiveTodo={this.props.displayActiveTodo}
            Complete={this.props.Complete}
            unComplete={this.props.unComplete}
            DeletingTodo={this.props.DeletingTodo} />
        </table>
        <TodoTextInput addingTodo={this.props.addingTodo} />
        </div>
      )


  }
}

TodoTable.propTypes = {
  todos : PropTypes.array.isRequired,
  addingTodo : PropTypes.func.isRequired,
  displayActiveTodo : PropTypes.func.isRequired,
  Complete : PropTypes.func.isRequired,
  unComplete : PropTypes.func.isRequired,
  DeletingTodo : PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    todos : state.todos
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({fetchTodo, addingTodo, displayActiveTodo,Complete, unComplete,DeletingTodo},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoTable)
