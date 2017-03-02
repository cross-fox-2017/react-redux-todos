import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'

const ItemList = (props) =>{
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TASK</th>
          <th>Complete</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((todo, index)=>{
          return (
              <tr key={index}>
                <td>{todo.id}</td>
                <td>{todo.task}</td>
                <td>{todo.completed}</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(ItemList)
