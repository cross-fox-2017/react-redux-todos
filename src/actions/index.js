export const listtodos = todos => ({
  type: 'LIST_TODOS',
  payload: todos.reverse()
})

export const GetAll = () => {
  return (dispatch) => {
    setTimeout(()=>{
      fetch('http://localhost:8080/todos')
        .then(res => res.json())
        .then(datatodos => dispatch(listtodos(datatodos)))
    },1000)
  }
}
export const showAddTodo = (newDataTodos) =>{
  return{
    type: 'NEW_DATA_TODOS',
    payload: newDataTodos
  }
}

export const addTodos = (title, description, status) =>{
    return (dispatch) => {
      fetch('http://localhost:8080/todos',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: title, description: description, status: status})
      })
      .then(res => res.json())
      .then(newDataTodos =>{
        dispatch(showAddTodo(newDataTodos))
      })
    }
}
