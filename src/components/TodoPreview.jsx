import React from 'react'
import { connect } from 'react-redux'
import { EditingTodo } from '../actions'


class TodoPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEditValue: '',
      currentId:'',
      currentCompleted:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.activeTodo);
    this.setState({
      currentEditValue: nextProps.activeTodo.text,
      currentId: nextProps.activeTodo.id,
      currentCompleted : nextProps.activeTodo.completed
    })
  }

  handleChange(newValue) {
    this.setState({
      currentEditValue: newValue
    })
  }
   handleSubmit(e) {
     e.preventDefault()

     const id = this.state.currentId
     const text = this.state.currentEditValue
     const status = this.state.currentCompleted
     console.log(id,text,status);
     this.props.EditingTodo(id,text,status)
     this.setState({
       currentEditValue: ""
     })
  }


  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <form onSubmit={this.handleSubmit}>
         <input value={this.state.currentEditValue}
          onChange={(e) => { this.handleChange(e.target.value) }}
          type="text"
          className="validate"
          placeholder="Todos" />
          </form>
        </div>
     </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeTodo : state.activeTodo
  }
}

const mapDispatchToProps = dispatch => ({

  EditingTodo : (id,text,status) => dispatch(EditingTodo(id,text,status))
})



export default connect(mapStateToProps,mapDispatchToProps)(TodoPreview)
