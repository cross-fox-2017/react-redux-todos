import { combineReducers } from 'redux'
import { listtodosReducer } from './reducerTodos'

const rootReducers = combineReducers({
  todosdata: listtodosReducer
})

export default rootReducers
