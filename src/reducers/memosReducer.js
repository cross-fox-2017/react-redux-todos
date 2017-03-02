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
      let getMemoIndex = copyState.map(item => item.id).indexOf(action.payload.id)
      copyState.splice(getMemoIndex, 1, { id: action.payload.id, memo: action.payload.memo })
      return copyState
    default:
      return state
  }
}
