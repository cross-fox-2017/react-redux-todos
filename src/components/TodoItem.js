import React from 'react'
import {connect} from 'react-redux'
import {deleteTodox,doneTodox,updateTodox} from '../actions/index.js'
class TodoItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modeEdit: false,
      inputEdit: this.props.todo
    }
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.updateTodox(this.props.id,this.state.inputEdit,this.props.done)
    this.setState({
      modeEdit: false
    })
  }
  handleChange(event){
    this.setState({
      inputEdit: event.target.value
    })
  }
  render(){
  if(this.state.modeEdit === false){
    return (
      <div className="row">
      <div className="col s3">
      </div>
        <div className="col s6">
          <div className="card black darken-1">
            <div className="card-content white-text">
              {
                (this.props.done) ? <span className="card-title"><strike style={{color:'grey'}}>{this.props.todo}</strike></span> : <span className="card-title">{this.props.todo}</span>
              }

              {
                (this.props.done) ? <i className="material-icons blue-text">done</i> : <i className="material-icons red-text">clear</i>
              }
            </div>
            <div className="card-action">
              {
                (this.props.done) ? <a style={{cursor:'pointer'}} onClick={() => this.props.doneTodox(this.props)}>undone</a> : <a style={{cursor:'pointer'}} onClick={() => this.props.doneTodox(this.props)}>done</a>
              }
              <a style={{cursor:'pointer'}} onClick ={() => this.props.deleteTodox(this.props.id)}>Delete</a>
              <a style={{cursor:'pointer'}} onClick ={() => this.setState({modeEdit:!this.state.modeEdit})}>EDIT</a>
            </div>
          </div>
        </div>
        <div className="col s3">
        </div>
      </div>
    )
  }
  else{
    return(
      <div className="row">
      <div className="col s3">
      </div>
        <div className="col s6">
          <div className="card black darken-1">
            <div className="card-content white-text">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={this.handleChange.bind(this)} value={this.state.inputEdit}></input>
              </form>
              {
                (this.props.done) ? <i className="material-icons blue-text">done</i> : <i className="material-icons red-text">clear</i>
              }
            </div>
            <div className="card-action">
              {
                (this.props.done) ? <a style={{cursor:'pointer'}} onClick={() => this.props.doneTodox(this.props)}>undone</a> : <a style={{cursor:'pointer'}} onClick={() => this.props.doneTodox(this.props)}>done</a>
              }
              <a style={{cursor:'pointer'}} onClick ={() => this.props.deleteTodox(this.props.id)}>Delete</a>
              <a style={{cursor:'pointer'}} onClick ={() => this.setState({modeEdit:!this.state.modeEdit})}>EDIT</a>
            </div>
          </div>
        </div>
        <div className="col s3">
        </div>
      </div>
    )


  }
}
}

const mapDispatchToProp = (dispatch) => {
  return {
    deleteTodox: (id) => dispatch(deleteTodox(id)),
    doneTodox : (todo) => dispatch(doneTodox(todo)),
    updateTodox : (id,todo,done) => dispatch(updateTodox(id,todo,done))
  }
  //return bindActionCreators({addTodo},dispatch)
}


export default connect(null,mapDispatchToProp)(TodoItem)
