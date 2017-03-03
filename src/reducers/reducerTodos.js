export const listtodosReducer = (state = [], action) =>{
  switch(action.type){
    case 'LIST_TODOS':
      return action.payload;
    case 'NEW_DATA_TODOS':
      return [action.payload, ...state];
    case 'DELETE_TODOS':
      return state.filter((dataTodos)=> dataTodos.id !== action.payload);
    case 'COMPLETE_TODOS':
      return state.filter((completeDataTodos)=> completeDataTodos.id === action.payload.id
      ? (completeDataTodos.title = action.payload.title, completeDataTodos.description = action.payload.description, completeDataTodos.status = true)
      : (completeDataTodos.title = action.payload.title, completeDataTodos.description = action.payload.description, completeDataTodos.status = false))
    default:
      return state;
  }
}
