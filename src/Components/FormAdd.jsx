import React from 'react'
import { Form, Button, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../Actions'

export const FormAdd = (props) =>{
  return (
    <Container onSubmit={(e)=>props.addTodo(event.tarvet.value)}>
      <Form>
        <label>New Todo</label>
        <input type="text" placeholder='Add New ToDo' />
        <Button>Add Todo</Button>
      </Form>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addTodo}, dispatch)
}

export default connect(null, mapDispatchToProps)(FormAdd)
