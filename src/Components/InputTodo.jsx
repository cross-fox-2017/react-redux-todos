import React from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postData, saveEdit, deleteTask } from '../Actions'

 class InputTodo extends React.Component{
  state = {
    text: this.props.text || '',
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  entered = e => {
    if (e.which === 13){
      if(this.props.newTodo){
        this.props.postData(e.target.value)
        this.setState({ text: ""})
      } else {
        this.onSave(e.target.value)
      }
    }
  }
  bluerred = e =>{
    if(!this.props.newTodo){
      this.onSave(e.target.value)
    }
  }
  onSave = (task) => {
    if(task.length === 0){
      this.props.deleteTask(this.props.id)
    } else {
      this.props.handleEdit()
      this.props.saveEdit(this.props.id, task, this.props.completed)
    }
  }
  render(){
    return (
      <Form onSubmit={(e)=>e.preventDefault()}>
        <input type="text"
          value={this.state.text}
          autoFocus="true"
          onBlur={(e)=> this.bluerred(e)}
          onChange={this.handleChange}
          onKeyDown={(e)=> this.entered(e)}/>
      </Form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({postData, saveEdit, deleteTask}, dispatch)
}

export default connect(null, mapDispatchToProps)(InputTodo)
