const initialState = [];
const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_ALL':
      return action.payload;
    default:
      return state;
  }
}

export default todosReducer;
