import React from 'react'
import { connect } from 'react-redux'
import { List, Grid } from 'semantic-ui-react'

const ItemList = (props) =>{
  return (
    <Grid centered columns={4}>
      <br></br><br></br>
      <List animated selection verticalAlign='middle'>
        {props.todos.map((todo, index) => {
          return (
            <List.Item key={todo.id}>
              <List.Content>
                <List.Header>{todo.task}</List.Header>
              </List.Content>
            </List.Item>
          )
        })}
      </List>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(ItemList)
