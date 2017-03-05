export default (state = 'show_all', action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return 'show_all'
    case 'SHOW_COMPLETED':
      return 'show_completed'
    case 'SHOW_ACTIVE':
      return 'show_active'
    default:
      return state
  }
}
