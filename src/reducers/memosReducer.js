const initialState = []

export const memosReducer = (state = initialState , action) => {
  switch (action.type) {
    case 'FETCH_MEMOS_SUCCESS':
      return action.payload
    case 'ADD_MEMOS_SUCCESS':
      return state.concat(action.payload)
    case 'DELETE_MEMOS_SUCCESS':
      return state.filter(item => item.id !== action.payload)
    case 'UPDATE_MEMOS_SUCCESS':

      let copyState = state
      console.log(action.payload.id)
      console.log(action.payload.memo)
      console.log(copyState)
      return copyState.splice(action.payload.id - 1, 1, {memo: action.payload.memo})
    default:
      return state
  }
}
