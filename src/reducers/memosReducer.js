const initialState = []

export const memosReducer = (state = initialState , action) => {
  switch (action.type) {
    case 'FETCH_MEMOS_SUCCESS':
      return action.payload
    case 'ADD_MEMOS_SUCCESS':
      return state.concat(action.payload)
    case 'DELETE_MEMOS_SUCCESS':
      return state.filter(item => item.id !== action.payload)
    default:
      return state
  }
}
