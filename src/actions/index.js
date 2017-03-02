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

export const deleteTodos = (id) => {
  return {
    type: 'DELETE_TODOS',
    payload: id
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

export const fetchPostTodos = (newTodo) => {
  return (dispatch) => {
    fetch('http://localhost:3004/todos', {
      method: 'POST',
      body: JSON.stringify({content: newTodo, completed: false}),
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

export const fetchDeleteTodos = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3004/todos/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        return response.json()
      })
      .then(() => {
        return dispatch(deleteTodos(id))
      })
  }
}
