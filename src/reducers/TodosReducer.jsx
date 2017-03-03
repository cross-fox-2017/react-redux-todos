const initialState = [];
const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_ALL':
      return action.payload
    case 'ADD_TODO':
      return [action.payload, ...state]
    case 'DELETE_TODO':
      return state.filter(todo => todo !== action.payload)
    case 'DONE_TODO':
      return state.map(todo => todo.id === action.payload.id ? {...todo,done:!todo.done} :todo)
    case 'EDIT_TODO':
      return state.map(todo => todo.id === action.payload.id ? Object.assign({}, todo, {title: action.payload.title}) :todo)
    default:
      return state;
  }
}

export default todosReducer;
