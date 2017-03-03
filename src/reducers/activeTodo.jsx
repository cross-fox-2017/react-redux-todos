import {
  DISPLAY_ACTIVE_TODO
} from '../constants/ActionType'

const initialState = {}

export const activeTodo = (state = initialState,action) => {

    switch(action.type){
      case DISPLAY_ACTIVE_TODO :

      return(
        {
          id :action.id,
          text : action.text,
          completed: action.completed
        }
      )
      default :
      return state
    }


}
