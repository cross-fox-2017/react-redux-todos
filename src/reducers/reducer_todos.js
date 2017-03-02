const TodosReducer = (state = '' , action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return action.payload
    default:
      return state
  }
}

export default TodosReducer
