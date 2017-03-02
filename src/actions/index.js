export const fetchMemosSuccess = memos => {
  return {
    type: 'FETCH_MEMOS_SUCCESS',
    payload: memos
  }
}

export const addMemosSuccess = memos => {
  return {
    type: 'ADD_MEMOS_SUCCESS',
    payload: memos
  }
}

export const deleteMemosSuccess = (id) => {
  return {
    type: 'DELETE_MEMOS_SUCCESS',
    payload: id
  }
}

export const addMemos = (memo) => {
  console.log(memo)
  return (dispatch) => {
    fetch('http://localhost:8080/memos', {
      method: 'POST',
      body: JSON.stringify({
        memo: memo
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(memos => dispatch(addMemosSuccess(memos)))
  }
}

export const deleteMemo = (id) => {
  console.log(id)
  return (dispatch) => {
    fetch('http://localhost:8080/memos/' + id, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(memos => dispatch(deleteMemosSuccess(id)))
  }
}

export const fetchMemos = () => {
  return (dispatch) => {
    fetch('http://localhost:8080/memos')
      .then(res => res.json())
      .then(memos => dispatch(fetchMemosSuccess(memos)))
  }
}
