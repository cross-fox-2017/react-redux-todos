
export const fetchTodoList = todos => ({
  type: 'FETCH_TODO',
  payload: todos,
})

export const fetchTodo = () => {
  return (dispatch) => {
    setTimeout(() => {
      fetch('http://localhost:2323/list')
        .then(res => res.json())
        .then(todos => dispatch(fetchTodoList(todos)))
      }
    , 1000);
  }
}
