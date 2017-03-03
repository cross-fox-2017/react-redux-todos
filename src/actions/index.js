export const actionFetch = (todos) => {
  return {
    type: 'FETCH_TODOS',
    payload:todos,

  }
}

export const addTodo = (todo,id) => {
  return {
    type:'ADD_TODO',
    payload: {
      id:id,
      todo:todo,
      done: false
    }
  }

}

export const deleteTodo = (id)=>{
 return {
   type:'DELETE_TODO',
   payload: id
 }
}

export const doneTodo = (todo)=>{
 return {
   type:'DONE_TODO',
   payload: todo
 }
}


export const fetchTodo = () => {
  return (dispatch) => {
    setTimeout(()=> {
      fetch('http://localhost:3005/todos')
      .then(res => res.json())
      .then(todos => dispatch(actionFetch(todos)))
    },10)
  }
}

export const addTodox = (todo) => {

  return (dispatch) => {
    setTimeout(()=> {
      fetch('http://localhost:3005/todos',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          todo:todo,
          done: false
        })
      })
      .then(res => res.json())
      .then(todos => dispatch(addTodo(todos.todo,todos.id)))
    },1)
  }
}

export const deleteTodox = (id) => {

  return (dispatch) => {
    setTimeout(()=> {
      fetch('http://localhost:3005/todos/'+id,{
        method: 'DELETE'

      })
      .then(res => res.json())
      .then(todos => dispatch(deleteTodo(id)))
    },1)
  }
}

export const doneTodox = (todo) => {

  return (dispatch) => {
    setTimeout(()=> {
      fetch('http://localhost:3005/todos/'+todo.id,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id:todo.id,
          todo:todo.todo,
          done: !todo.done
        })
      })
      .then(res => res.json())
      .then(todos => dispatch(doneTodo(todos)))
    },1)
  }
}
