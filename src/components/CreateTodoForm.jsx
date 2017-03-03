import React, { Component } from 'react'
import { postTodo } from '../actions'
import { connect } from 'react-redux'

class CreateTodoForm extends Component {
  state = {inputTodo: ''}

  handleChange(e) {
    this.setState({
      inputTodo: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.postTodo(this.state.inputTodo)
    this.setState({
      inputTodo: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <br/>
          Create New Todo:<br/>
        <input
          onChange={this.handleChange.bind(this)}
          value={this.state.inputTodo}
          type="text"
          /><br/>
      </form>
    </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  postTodo: (newTodo) => dispatch(postTodo(newTodo))
})

export default connect(null,mapDispatchToProps)(CreateTodoForm)
