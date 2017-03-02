import React, { Component } from 'react'
import { connect } from 'react-redux'

const style = {
  input: {
    width: '30%',
    padding: '0px 10px',
    textAlign: 'left'
  }
}

import { addTodos } from '../../actions'

class TodosAddForm extends Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
  }
  handleChange (event) {
    this.setState({
      text: event.target.value
    })
  }

  render () {
    return (
      <form onSubmit={function (e) {e.preventDefault(); return this.props.fetchNewTodos(this.state.text)}}>
        <input
          style={style.input}
          id='add'
          type='text'
          onChange={this.handleChange.bind(this)}
          placeholder='Add to list...' />
        {'  '}
        <button type='button' className='btn light-green darken-3'>
          <i className='material-icons'>add</i>
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodos: () => dispatch(addTodos())
})

export default connect(null, mapDispatchToProps)(TodosAddForm)
