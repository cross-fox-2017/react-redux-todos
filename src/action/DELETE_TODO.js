// Delete state in front-end
export const removeTodo = remove => ({
  type: 'REMOVE_TODO',
  payload: remove,
})

// Delete from database
export const deleteTodo = (haha) => {
  return (dispatch) => {
      fetch('http://localhost:2323/list/' + haha.id ,{
        method: 'DELETE'
      })
        .then(res => res.json())
        .then((qqq) => dispatch(removeTodo(haha)))
  }
}
