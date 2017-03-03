export const setTodos = (todos) => {
  return {
    type: 'SET_TODOS',
    payload: todos
  }
}

export const addTodo = (todos) => {
  return {
    type: 'ADD_TODO',
    payload: todos
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    payload: id
  }
}

export const updateTodo = (todos) => {
  return {
    type: 'UPDATE_TODO',
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

export const fetchPostTodo = (newContent) => {
  return (dispatch) => {
    fetch('http://localhost:3004/todos', {
      method: 'POST',
      body: JSON.stringify({content: newContent, completed: false}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(newTodo => {
        return dispatch(addTodo(newTodo))
      })
  }
}

export const fetchPutTodo = (id, newContent, newCompleted) => {
  return (dispatch) => {
    fetch(`http://localhost:3004/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({content: newContent, completed: newCompleted}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(updatedTodo => {
        return dispatch(updateTodo(updatedTodo))
      })
  }
}

export const fetchDeleteTodo = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3004/todos/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        return response.json()
      })
      .then(() => {
        return dispatch(deleteTodo(id))
      })
  }
}
