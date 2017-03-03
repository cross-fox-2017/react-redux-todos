import { combineReducers } from 'redux'
import TodosReducer from './reducer_todos.js'

const rootReducers = combineReducers({
  todos: TodosReducer
})

export default rootReducers
