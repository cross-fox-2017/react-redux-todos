import React, { Component } from 'react'
// import { connect } from 'react-redux'

const style = {
  input: {
    width: '30%',
    padding: '0px 10px',
    textAlign: 'left'
  }
}

class TodosAddForm extends Component {
  render () {
    return (
      <form>
        <input
          style={style.input}
          id='add'
          type='text'
          placeholder='Add to list...'></input>
        {'  '}
        <button type='button' className='btn light-green darken-3'>
          <i className='material-icons'>add</i>
        </button>
      </form>
    )
  }
}

export default TodosAddForm

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos
//   }
// }
//
// const mapDispatchToProps = (dispatch) => ({
//   fetchTodos: () => dispatch(fetchTodos())
// })
//
// TodosList.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       content: PropTypes.string.isRequired,
//       completed: PropTypes.string.isRequired
//     })
//   ).isRequired,
//   fetchTodos: PropTypes.func.isRequired
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
