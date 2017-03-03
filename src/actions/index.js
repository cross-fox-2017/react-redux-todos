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

export const actionDeleteDataTodos = (id) => {
  return{
    type: 'DELETE_TODOS',
    payload: id
  }
}

export const deleteDataTodos = (id) => {
  return (dispatch) => {
    fetch ('http://localhost:8080/todos/'+id,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(todos => {
      dispatch(actionDeleteDataTodos(id))
    })
  }
}


export const completeDataTodos = (id,title,description) => {
  return (dispatch) => {
    fetch('http://localhost:8080/todos/'+id,{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title: title, description: description, status: true})
    })
    .then(res => res.json())
    .then(todos => {
      dispatch(GetAll())
    })
  }
}

export const uncompleteDataTodos = (id,title,description) => {
  return (dispatch) => {
    fetch('http://localhost:8080/todos/'+id,{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title: title, description: description, status: false})
    })
    .then(res => res.json())
    .then(todos => {
      dispatch(GetAll())
    })
  }
}
