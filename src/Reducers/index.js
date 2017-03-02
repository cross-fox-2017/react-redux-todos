import { combineReducers } from 'redux'
import TodoReducer from './TodoReducer'
import FilterReducer from './FilterReducer'

const rootReducers = combineReducers({
  todo: TodoReducer,
  filter: FilterReducer
})

export default rootReducers
