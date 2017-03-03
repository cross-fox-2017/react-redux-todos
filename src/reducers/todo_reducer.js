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
      console.log(action.payload);
      return state.map((x)=> x.id !== action.payload.id ? x : {...x,completed:!x.completed})
    default:
      return state;
  }
}

export default todoReducer;
