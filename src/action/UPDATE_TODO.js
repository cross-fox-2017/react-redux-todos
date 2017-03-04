export const updateTodo = todos => ({
  type: 'UPDATE_TODO',
  payload: todos
})

export const saveTodo = (todo) => {
  return (dispatch) => {
      fetch('http://localhost:2323/list/'+todo.id,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'title': todo.title, 'completed': todo.completed})
      })
        .then(res => res.json())
        .then((todos) => dispatch(updateTodo(todos)))
  }
}
