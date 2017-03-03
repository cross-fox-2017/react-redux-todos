import {combineReducers} from 'redux'
import TodoReducer from './reducer_todos.js'

const rootReducers = combineReducers({
  todo: TodoReducer
})

export default rootReducers
