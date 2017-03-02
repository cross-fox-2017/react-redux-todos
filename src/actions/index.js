export const setTodos = (todos) => {
  return {
    type: 'SET_TODOS',
    payload: todos
  }
}

export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
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

export const fetchNewTodos = (newTodo) => {
  return (dispatch) => {
    fetch('http://localhost:3004/todos', {
      method: 'POST',
      body: JSON.stringify({content: newTodo, completed: 'false'}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(todos => {
        return dispatch(addTodos(todos))
      })
  }
}
