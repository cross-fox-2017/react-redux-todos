import { combineReducers } from 'redux'
import TodosReducers from './todosReducer'

const rootReducers = combineReducers({
  todos: TodosReducers
})

export default rootReducers
