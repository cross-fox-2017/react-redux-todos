export const addTodo = (task) =>{
  return {
    type: 'ADD_TODO',
    task
  }
}
export const getData = (todos) => {
  return {
    type: 'FETCH_DATA',
    todos
  }
}
export const handleInput = (input) => {
  return {
    type: 'USER_INPUT',
    input
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
