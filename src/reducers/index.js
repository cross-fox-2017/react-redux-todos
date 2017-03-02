import { combineReducers } from 'redux'

import { memosReducer } from './memosReducer'

const rootReducers = combineReducers({
  memos: memosReducer
})

export default rootReducers
