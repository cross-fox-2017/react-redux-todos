
export default (state=[] , action) => {
  console.log(state);
  switch(action.type){
    case 'FETCH_TODOS' :
      return action.payload
      break;
    case 'ADD_TODO' :

      return [...state, action.payload]
      break;
    case 'DELETE_TODO' :
    console.log(state);
      return state.filter((x)=> x.id !== action.payload)
      break;
    case 'DONE_TODO' :
      return state.map((todo) => todo.id !== action.payload.id ? todo : {...todo, done:!todo.done})
      break;
    case 'UPDATE_TODO' :
      return state.map((todo) => todo.id !== action.payload.id ? todo : {...todo, todo:action.payload.todo})
      break;
    default:
      return state
  }
}
