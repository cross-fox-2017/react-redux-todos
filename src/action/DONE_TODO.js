export const stateDoneTodo = todos => ({
  type: 'DONE_TODO',
  payload: todos,
})

export const doneTodo = (haha) => {
  return (dispatch) => {
      fetch('http://localhost:2323/list/' + haha.id ,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'title': haha.title, 'completed': !haha.completed})
      })
        .then(res => res.json())
        .then((qqq) =>{
          console.log(qqq);
         dispatch(stateDoneTodo(qqq))
       }).catch((err)=>{
       })
  }
}
