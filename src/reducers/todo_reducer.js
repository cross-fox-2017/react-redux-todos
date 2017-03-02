const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_TODO':
      return action.payload;
    default:
      return state;
  }
}

export default todoReducer;
