export const showAllTodos = todos => (
  {
    type: 'SHOW_ALL',
    payload: todos
  }
)

export const getTodos = () => {
  return dispatch => {
    setTimeout(() => {
      fetch('http://localhost:3001/todos')
      .then(res => res.json())
      .then(todos => dispatch(showAllTodos(todos)))
    },1000)
  }
}

export const createTodo = todo => (
  {
    type: 'ADD_TODO',
    payload: todo
  }
)

export const postTodo = todo => {
  return dispatch => {
    fetch('http://localhost:3001/todos',{
      method: 'POST',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify({
        title: todo,
        done: false
      })
    })
    .then(res => res.json())
    .then(todo => dispatch(createTodo(todo)))
  }
}

export const deleteTodo = todo => (
  {
    type: 'DELETE_TODO',
    payload: todo
  }
)

export const deleteAsyncTodo = todo => {
  return dispatch => {
    fetch('http://localhost:3001/todos/'+todo.id,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(todoKosong => dispatch(deleteTodo(todo)))
  }
}

export const doneTodo = todo => (
  {
    type: 'DONE_TODO',
    payload: todo
  }
)

export const putDoneTodo = todo => {
  return dispatch => {
    fetch('http://localhost:3001/todos/'+todo.id,{
      method: 'PUT',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify({
        title: todo.title,
        done: !todo.done
      })
    })
    .then(res => res.json())
    .then(todo => dispatch(doneTodo(todo)))
  }
}
