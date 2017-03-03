import * as types from '../constants/ActionType'

export const displayActiveTodo  = (id,text,completed) =>  ({type:types.DISPLAY_ACTIVE_TODO,id,text,completed})
export const editTodo = (id,text,completed) => ({ type : types.EDIT_TODO ,id,text,completed })
export const clearComplete = () => ({ type : types.CLEAR_COMPLETE })


export const allTodo = (todos) => {
  return {
    type: 'ALL_TODO',
    payload : todos
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    payload : id
  }
}

export const fetchTodo = () => {

  return (dispatch) => {

      setTimeout(()=>{
        fetch('http://localhost:3003/Todos')
        .then(res => res.json())
        .then(todos => dispatch(allTodo(todos)))
      },1000)
  }
}

export const addTodo = (id,text) => {
  return{
      type : types.ADD_TODO,
      payload: { id,text }
  }
}

export const addingTodo = (todo) => {

  return (dispatch) => {

        fetch('http://localhost:3003/Todos',{
          method:'POST',
          headers: {'Content-Type' : 'application/json'},
          body : JSON.stringify({
            text : todo,
            completed : false
          })
        })
          .then(res => res.json())
          .then(todos => dispatch(addTodo(todos.id,todos.text)))
  }
}

export const Complete = (id,text) => {

  return (dispatch) => {

        fetch('http://localhost:3003/Todos/'+id,{
          method:'PUT',
          headers: {'Content-Type' : 'application/json'},
          body : JSON.stringify({
            id : id,
            text : text,
            completed : true
          })
        })
          .then(res => res.json())
          .then(todos => dispatch(fetchTodo()))
  }
}

export const unComplete = (id,text) => {

  return (dispatch) => {

        fetch('http://localhost:3003/Todos/'+id,{
          method:'PUT',
          headers: {'Content-Type' : 'application/json'},
          body : JSON.stringify({
            id : id,
            text : text,
            completed : false
          })
        })
          .then(res => res.json())
          .then(todos => dispatch(fetchTodo()))
  }

}

export const EditingTodo = (id,text,status) => {

  return (dispatch) => {

        fetch('http://localhost:3003/Todos/'+id,{
          method:'PUT',
          headers: {'Content-Type' : 'application/json'},
          body : JSON.stringify({
            id : id,
            text : text,
            completed : status
          })
        })
          .then(res => res.json())
          .then(todos => dispatch(fetchTodo()))
  }
}

export const DeletingTodo = (id) => {

  return (dispatch) => {

        fetch('http://localhost:3003/Todos/'+id,{
          method:'DELETE',
          headers: {'Content-Type' : 'application/json'},
        })
          .then(res => res.json())
          .then(() => dispatch(deleteTodo(id)))
  }
}
