const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_TODO':
      return action.payload;
    case 'CREATE_TODO':
      return [...state, action.payload]
    case 'REMOVE_TODO':
      return state.filter( xxx => xxx !== action.payload);
    case 'DONE_TODO':
      return state.map((todo)=> todo.id !== action.payload.id ? todo : {...todo, completed:!todo.completed})
    case 'UPDATE_TODO':
      return state.map((todo)=> todo.id !== action.payload.id ? todo : Object.assign({}, todo, { title: action.payload.title }) )
    default:
      return state;
  }
}

export default todoReducer;
