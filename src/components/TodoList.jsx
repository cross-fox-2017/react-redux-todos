import React from 'react'


class TodoList extends React.Component {

  render(){

    return (

        <tbody>
      {
        this.props.todos.map((todo,index) => {
          return (
            <tr key={index}>
                <td>{todo.id}</td>
                <td>{todo.text}</td>
                <td>
                  {todo.completed ?
                     <a href="#" onClick={()=>this.props.unComplete(todo.id,todo.text)}><i className="material-icons">done</i></a>
                   : <a href="#" onClick={()=>this.props.Complete(todo.id,todo.text)}><i className="material-icons">block</i></a>}
                 </td>
              <td><a href="#" onClick={()=>this.props.displayActiveTodo(todo.id,todo.text)}><i className="material-icons right">mode_edit</i></a></td>
              <td><a href="#"onClick={()=> this.props.DeletingTodo(todo.id)}><i className="material-icons right">delete</i></a></td>
              </tr>
          )
        })
      }
      </tbody>
    )
  }
}


export default TodoList
// onClick={()=>{props.editTodo(todo.id,todo.text)}}
