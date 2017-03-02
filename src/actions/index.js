export const fetchTodos = (todos) => {
  return {
    type: 'SET_TODOS',
    payload: todos
  }
}
