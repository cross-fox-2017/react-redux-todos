import React from 'react'
import { connect } from 'react-redux'
import { List, Grid } from 'semantic-ui-react'
import InputTodo from './InputTodo'

class ItemList extends React.Component{
  state = {
    editing: false,
    editItem: false
  }
  editMode(e, id){
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
              return (
                <List.Item key={todo.id}>
                  <List.Content>
                    <List.Header onDoubleClick={(e)=>this.editMode(e, todo.id)}>{todo.task}</List.Header>
                  </List.Content>
                </List.Item>
              )
            } else {
              return (
                <InputTodo text={todo.task} editing={this.state.editing} key={todo.id} handleEdit={this.handleEdit.bind(this)}/>
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

export default connect(mapStateToProps)(ItemList)
