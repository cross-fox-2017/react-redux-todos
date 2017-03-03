import { combineReducers } from 'redux'
import { todos } from './todos'
import { activeTodo } from './activeTodo'

const rootReducers = combineReducers({todos,activeTodo})

export default rootReducers
