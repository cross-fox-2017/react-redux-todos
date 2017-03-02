import { combineReducers } from 'redux';
import todoReducer from './todo_reducer';

const rootReducers = combineReducers({
  todolist: todoReducer
})

export default rootReducers
