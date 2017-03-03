import React from 'react'
import {connect} from 'react-redux'
import {deleteTodox,doneTodox} from '../actions/index.js'

const TodoItem = (props) => {
  return (
    <div className="row">
    <div className="col s3">
    </div>
      <div className="col s6">
        <div className="card black darken-1">
          <div className="card-content white-text">
            <span className="card-title">{props.todo}</span>
            <p>completed: {props.done.toString()}</p>
          </div>
          <div className="card-action">
            <a onClick={() => props.doneTodox(props)}>done</a>
            <a onClick ={() => props.deleteTodox(props.id)}>Delete</a>
          </div>
        </div>
      </div>
      <div className="col s3">
      </div>
    </div>

  )
}

const mapDispatchToProp = (dispatch) => {
  return {
    deleteTodox: (id) => dispatch(deleteTodox(id)),
    doneTodox : (todo) => dispatch(doneTodox(todo))
  }
  //return bindActionCreators({addTodo},dispatch)
}


export default connect(null,mapDispatchToProp)(TodoItem)
