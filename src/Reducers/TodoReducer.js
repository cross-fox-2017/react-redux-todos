const initialState = [
    {id: 1, task: 'first test', completed: 'true'},
    {id: 2, task: 'second test', completed: 'false'},
    {id: 3, task: 'third test', completed: 'false'}
  ]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
        return action.todos
    case 'ADD_TODO':
        return state.concat(action.task)
    default:
      return state
  }
}
