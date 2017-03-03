
export default (state=[] , action) => {
  console.log(state);
  switch(action.type){
    case 'FETCH_TODOS' :
      return action.payload
      break;
    case 'ADD_TODO' :
    console.log(state);
      return [...state, action.payload]
      break;
    case 'DELETE_TODO' :
    console.log(state);
      return state.filter((x)=> x.id !== action.payload)
      break;
    case 'DONE_TODO' :
    console.log(state);
      return state.map((todo) => todo.id !== action.payload.id ? todo : {...todo, done:!todo.done})
      break;
    default:
      return state
  }
}
