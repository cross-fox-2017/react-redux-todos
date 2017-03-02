import { combineReducers } from 'redux'
import { newsListsReducer, searchKeywordReducer, listtodosReducer } from './reducerNews'

const rootReducers = combineReducers({
  news: newsListsReducer,
  searchKeyword: searchKeywordReducer,
  todosdata: listtodosReducer
})

export default rootReducers
