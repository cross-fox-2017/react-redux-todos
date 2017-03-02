const initialState = [];
const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_ALL':
      return action.payload
    case 'ADD_TODO':
      return [action.payload, ...state]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload.id)
    default:
      return state;
  }
}

export default todosReducer;
