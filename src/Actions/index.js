export const addTodo = (id) =>{
  return {
    type: 'ADD_TODO',
    id
  }
}

export const getData = (todos) => {
  return {
    type: 'FETCH_DATA',
    todos
  }
}

export const fetchData = () => {
  return (dispatch) => {
    fetch('http://localhost:8080/todos')
      .then(response => response.json())
      .then((todos) => dispatch(getData(todos)))
  }
}
