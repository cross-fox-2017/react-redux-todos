import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchNews } from '../../actions'
import { Form, TextArea, Button, Icon, Input } from 'semantic-ui-react'
import '../../App.css'

const InputTodos = (props) => {
  return (
    <div>
      <Input className="inputTodos" focus placeholder='Title' />
      <Form className="inputTodos">
           <TextArea placeholder='Description' />
      </Form>
      <Button className="inputTodos" color='instagram'>
          <Icon name='instagram' /> Save Todo
      </Button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
    keyword: state.searchKeyword
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({searchNews}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTodos)
