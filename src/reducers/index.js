import { combineReducers } from 'redux'
import TodosReducers from './TodosReducer'

const rootReducers = combineReducers({
  todos: TodosReducers
})

export default rootReducers
