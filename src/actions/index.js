import Constants from '../Constants'

export const showAllTodos = todos => (
  {
    type: SHOW_ALL,
    payload: todos
  }
)

export const getTodos = () => {
  return (dispatch) => {
    setTimeOut(() => {
      fetch('http://localhost:3001/todos')
      .then(res => res.json())
      .then(todos => dispatch(showAllTodos(todos)))
    })
  }
}
