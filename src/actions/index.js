export const setTodos = (todos) => {
  return {
    type: 'SET_TODOS',
    payload: todos
  }
}

export const fetchTodos = () => {
  return (dispatch) => {
    fetch('http://localhost:3004/todos')
      .then(response => {
        return response.json()
      })
      .then(todos => {
        return dispatch(setTodos(todos))
      })
  }
}
