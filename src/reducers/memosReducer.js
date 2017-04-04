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
      copyState.splice(getMemoIndex, 1, { id: action.payload.id, memo: action.payload.memo, completed: false })
      return copyState
    case 'UPDATE_COMPLETE_SUCCESS':
      let getStatus = String((action.payload.completed === "true"))
      let copyStateComplete = state
      let getMemoIndexComplete = copyStateComplete.map(item => item.id).indexOf(action.payload.id)
      copyStateComplete.splice(getMemoIndexComplete, 1, { id: action.payload.id, memo: action.payload.memo, completed: getStatus})
      return copyStateComplete
    default:

      return state
  }
}
