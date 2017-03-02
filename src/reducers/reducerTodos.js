export const listtodosReducer = (state = [], action) =>{
  switch(action.type){
    case 'LIST_TODOS':
      return action.payload;
    case 'NEW_DATA_TODOS':
      return [action.payload, ...state];
    default:
      return state;
  }
}
