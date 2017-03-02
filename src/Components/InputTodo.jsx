import React from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postData, saveEdit } from '../Actions'

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
      } else {
        this.props.handleEdit()
        this.props.saveEdit(e.target.value, this.props.id)
      }
    }
  }
  bluerred = e =>{
    if(!this.props.newTodo){
      this.props.handleEdit()
      this.props.saveEdit(e.target.value, this.props.id)
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
  return bindActionCreators({postData, saveEdit}, dispatch)
}

export default connect(null, mapDispatchToProps)(InputTodo)
