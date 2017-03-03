import React from 'react'
import TodoItem from './TodoItem.js'
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
import {fetchTodo} from '../actions/index.js'
class TodoList extends React.Component {

 componentDidMount(){
  this.props.fetchTodo()
 }

render(){
  return (
    <div>
    {
      this.props.todo.map((item) => {
        return(
          <TodoItem key={item.id} {...item}/>
        )
      })
    }
    </div>
  )

}

}

const toProp = (state) => {
  return {
    todo : state.todo
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    fetchTodo: (newTodo) => dispatch(fetchTodo())
  }
  //return bindActionCreators({addTodo},dispatch)
}


export default connect(toProp,mapDispatchToProp)(TodoList)
