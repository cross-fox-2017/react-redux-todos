import React from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postData, handleInput } from '../Actions'

 class InputTodo extends React.Component{
  state = {
    text: this.props.text || '',
    editing: this.props.editing
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  entered = (e) => {
    if (e.which === 13){
      // this.props.postData(e.target.value)
      this.props.handleEdit()
    }
  }
  render(){
    return (
      <Form onSubmit={(e)=>e.preventDefault()}>
        <input type="text"
          value={this.state.text}
          autoFocus="true"
          onBlur={(e)=> this.entered(e)}
          onChange={this.handleChange}
          onKeyDown={(e)=> this.entered(e)}/>
      </Form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({postData, handleInput}, dispatch)
}

export default connect(null, mapDispatchToProps)(InputTodo)
