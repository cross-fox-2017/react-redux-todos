import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { List, Grid } from 'semantic-ui-react'
import InputTodo from './InputTodo'
import { saveEdit } from '../Actions'

class ItemList extends React.Component{
  state = {
    editing: false,
    editItem: false
  }
  editMode(id){
    // console.log(e.target.firstChild.data)
    this.setState({ editing: true, editItem: id})
  }
  handleEdit(){
    this.setState({ editing: false})
  }
  render(){
    return (
      <Grid centered columns={4}>
        <br></br><br></br>
        <List animated selection verticalAlign='middle'>
          {this.props.todos.map((todo, index) => {
            if(!this.state.editing || this.state.editItem !== todo.id){
              let completing
              if(todo.completed == "true"){
                completing = "false"
              } else {
                completing = "true"
              }
              return (
                <List.Item key={todo.id}>
                  <List.Content>
                    <List.Header onDoubleClick={()=>this.editMode(todo.id)} onClick={()=>this.props.saveEdit(todo.id, todo.task, completing)}>{todo.task} {todo.completed}</List.Header>
                  </List.Content>
                </List.Item>
              )
            } else {
              return (
                <InputTodo text={todo.task} id={todo.id} completed={todo.completed} editing={this.state.editing} key={todo.id} handleEdit={this.handleEdit.bind(this)}/>
              )
            }
          })}
        </List>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({saveEdit}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
