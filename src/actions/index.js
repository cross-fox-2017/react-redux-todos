export const showAllTodos = todos => (
  {
    type: 'SHOW_ALL',
    payload: todos
  }
)

export const getTodos = () => {
  return (dispatch) => {
    setTimeout(() => {
      fetch('http://localhost:3001/todos')
      .then(res => res.json())
      .then(todos => dispatch(showAllTodos(todos)))
    },3000)
  }
}

export const createTodo = todo => (
  {
    type: 'ADD_TODO',
    payload: todo
  }
)

export const postTodo = (todo) => {
  return (dispatch) => {
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
