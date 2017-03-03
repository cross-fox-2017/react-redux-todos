export const listtodosReducer = (state = [], action) =>{
  switch(action.type){
    case 'LIST_TODOS':
      return action.payload;
    case 'NEW_DATA_TODOS':
      return [action.payload, ...state];
    case 'DELETE_TODOS':
      return state.filter((dataTodos)=> dataTodos.id !== action.payload);
    default:
      return state;
  }
}
