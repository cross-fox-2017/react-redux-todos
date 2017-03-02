import React from 'react'
import { Form, Button, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postData, handleInput } from '../Actions'

 class FormAdd extends React.Component{
  state = {
    text: this.props.text || 'Add Todo'
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  entered = e => {
    if (e.which === 13){
      this.props.postData(e.target.value)
    }
  }
  submited = e => {
    if (true){

    }
  }
  render(){
    return (
      <Container onSubmit={(e)=>e.preventDefault()}>
        <Form>
          <label>New Todo</label>
          <input type="text"
            placeholder={this.state.text}
            autoFocus="true"
            onChange={this.handleChange}
            onKeyDown={this.entered}/>
        </Form>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({postData, handleInput}, dispatch)
}

export default connect(null, mapDispatchToProps)(FormAdd)
