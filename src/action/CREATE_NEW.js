// Create state for front-end
export const createNewTodo = create => ({
  type: 'CREATE_TODO',
  payload: create,
})

// Save to database
export const saveTodo = (title) => {
  return (dispatch) => {
      fetch('http://localhost:2323/list',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'title': title, 'completed': false})
      })
        .then(res => res.json())
        .then((todos) => dispatch(createNewTodo(todos)))
  }
}
