import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addTodox} from '../actions'

class FormInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputTodo:''
    }

  }
  handleSubmit(e){
    e.preventDefault()

    this.props.addTodoDispatched(this.state.inputTodo)
  }
  handleChange(event){
    this.setState({
      inputTodo: event.target.value
    })
  }
  render(){

    return (
      <div className="row">
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="col s3">
        </div>
        <div className="input-field col s6">
        <input placeholder="input a todo..." id="first_name2" onChange={this.handleChange.bind(this)} value={this.state.inputTodo} type="text" className="validate" />
        <label className="active" htmlFor="first_name2">First Name</label>
        </div>
        <div className="col s3">
        </div>
      </form>
      </div>
    )

  }
}

// const mapStateToProp = (state) => {
//   return {
//     searchKey : state.searchKey
//   }
// }
//
const mapDispatchToProp = (dispatch) => {
  return {
    addTodoDispatched: (newTodo) => dispatch(addTodox(newTodo))
  }
  //return bindActionCreators({addTodo},dispatch)
}

export default connect(null,mapDispatchToProp)(FormInput)
