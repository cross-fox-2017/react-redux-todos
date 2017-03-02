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
