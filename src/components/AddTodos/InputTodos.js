import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addTodos} from '../../actions'
import {Form, TextArea, Button, Icon, Input} from 'semantic-ui-react'
import '../../App.css'

class InputTodos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            status: false
        }
    }
    handleInputTitle(e){
      this.setState({
        title: e.target.value
      })
    }
    handleInputDescription(e){
      this.setState({
        description: e.target.value
      })
    }
    handleSaveTodos(e){
      e.preventDefault()
      if(this.state.title.trim() === "" || this.state.description.trim() === ""){
          alert("Silahkan Masukkan Title dan Description")
      }else{
        this.props.addTodos(this.state.title, this.state.description, this.state.status)
        this.setState({
          title: '',
          description: '',
        })
      }
    }
    render() {
        return (
            <div>
                <Input onChange={this.handleInputTitle.bind(this)} value={this.state.title} className="inputTodos" focus placeholder='Title'/>
                <Form className="inputTodos">
                    <TextArea onChange={this.handleInputDescription.bind(this)} value={this.state.description}  placeholder='Description'/>
                </Form>
                <Button onClick={this.handleSaveTodos.bind(this)} className="inputTodos" color='instagram'>
                    <Icon name='instagram'/>
                    Save Todo
                </Button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addTodos}, dispatch)
}

export default connect(null, mapDispatchToProps)(InputTodos)
