import * as types from '../Constants'

//CRUD ACTION
export const addTodo = (task) => ({type: types.ADD_TODO,task})
export const getData = (todos) => ({type: types.FETCH_DATA, todos})
export const handleInput = (input) => ({type: types.USER_INPUT, input})
export const updateTodo = (task) => ({type: types.UPDATE_TODO, task})
export const deleteTodo = (id) => ({type: types.DELETE_TODO, id})
export const clearComplete = () => ({type: types.CLEAR_COMPLETED})
export const completeAll = () => ({type: types.COMPLETE_ALL})

//Filter
export const showAll = () => ({type: 'SHOW_ALL'})
export const showCompleted = () => ({type: 'SHOW_COMPLETED'})
export const showActive = () => ({type: 'SHOW_ACTIVE'})

//FETCHING
export const deleteTask = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: 'DELETE'
    })
    .then(()=> dispatch(deleteTodo(id)))
  }
}
export const saveEdit = (id, task, completed) => {
  return (dispatch) => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'},
      body: `task=${task}&completed=${completed}`
    })
    .then(task => task.json())
    .then(task => dispatch(updateTodo(task)))
  }
}
export const fetchData = () => {
  return (dispatch) => {
    fetch('http://localhost:8080/todos')
      .then(response => response.json())
      .then((todos) => dispatch(getData(todos)))
  }
}
export const postData = (task) => {
  return (dispatch) => {
    fetch('http://localhost:8080/todos', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'},
      body: `task=${task}&completed=false`
    })
    .then(task => task.json())
    .then(task => dispatch(addTodo(task)))
  }
}
