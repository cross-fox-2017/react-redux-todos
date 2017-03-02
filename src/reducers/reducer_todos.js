const TodosReducer = (state = [] , action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return action.payload
    case 'ADD_TODOS':
      return state.concat(action.payload)
    default:
      return state
  }
}

export default TodosReducer
