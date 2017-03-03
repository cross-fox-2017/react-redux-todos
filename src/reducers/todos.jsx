import {
  ADD_TODO
} from '../constants/ActionType'

const initialState = []

export const todos = (state = initialState,action) => {

  switch(action.type)
  {
    case ADD_TODO:
      return [
        ...state,
          action.payload
      ]
    case "ALL_TODO" :
    return action.payload

    case "DELETE_TODO" :
    return state.filter(todos => todos.id !== action.payload )

    default :
    return state
  }
}
//
// DELETE_TODO,
// EDIT_TODO,
// COMPLETE_TODO,
// COMPLETE_ALL,
// CLEAR_COMPLETED
