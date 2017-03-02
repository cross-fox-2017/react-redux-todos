import React, {Component} from 'react';
import { saveTodo} from '../action/CREATE_NEW'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentTitle: ''
    }
  }

  handleTitleChange(e){
    this.setState({
      currentTitle: e.target.value
    })
  }

  handleEnterToSubmit(e){
    e.preventDefault()
    this.props.saveTodo(this.state.currentTitle)
    this.setState({
      currentTitle: ''
    })
  }


  render(){
    return(
      <form onSubmit={this.handleEnterToSubmit.bind(this)}>
        <input type="text" placeholder="What needs to be done?" onChange={this.handleTitleChange.bind(this)} value={this.state.currentTitle}></input>
      </form>
    )}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({saveTodo}, dispatch)
}

export default connect(null, mapDispatchToProps)(Form)
