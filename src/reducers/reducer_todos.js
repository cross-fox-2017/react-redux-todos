const TodosReducer = (state = [] , action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return action.payload
    case 'ADD_TODO':
      return state.concat(action.payload)
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload)
    case 'UPDATE_TODO':
      return state.map(todo => todo.id === action.payload.id ? Object.assign({}, action.payload) : Object.assign({}, todo))
    default:
      return state
  }
}

export default TodosReducer
