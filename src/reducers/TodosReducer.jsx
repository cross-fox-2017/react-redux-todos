const initialState = [];
const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_ALL':
      return action.payload
    case 'ADD_TODO':
      return [action.payload, ...state]
    default:
      return state;
  }
}

export default todosReducer;
