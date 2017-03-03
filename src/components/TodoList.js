import React from 'react'
import TodoItem from './TodoItem.js'
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
import {fetchTodo} from '../actions/index.js'
import load from '../load.gif'
class TodoList extends React.Component {

 componentDidMount(){
  this.props.fetchTodo()
 }

render(){
  if (this.props.todo.length == 0) {
    return(
      <img src={load}/>
    )
  } else {
    return (
      <div>
        <h1>YOUR TODO LIST: </h1>
      {
        this.props.todo.map((item) => {
        console.log(item);
          return(
            <TodoItem key={item.id} {...item}/>
          )
        })
      }
      </div>
    )
  }


} // render

} // class

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
