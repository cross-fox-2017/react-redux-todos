import { combineReducers } from 'redux'
import { newsListsReducer, searchKeywordReducer } from './reducerNews'

const rootReducers = combineReducers({
  news: newsListsReducer,
  searchKeyword: searchKeywordReducer
})

export default rootReducers
