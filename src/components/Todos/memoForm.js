import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addMemos } from '../../actions'

class memoForm extends Component {
  constructor () {
    super()
    this.state = {
      currentMemo: ''
    }
  }
  handleChange (e) {
    this.setState({
      currentMemo: e.target.value
    })
  }
  render () {
    return (
      <form onSubmit={e => {
                  e.preventDefault()
                  if (this.state.currentMemo === '') {
                    alert('Please input your memo')
                  } else {
                    this.props.addMemos(this.state.currentMemo)
                    this.setState({
                      currentMemo: ''
                    })
                  }
                }}>
        <div className='row'>
          <div className='input-field col s6'>
            <input
              onChange={this.handleChange.bind(this)}
              value={this.state.currentMemo}
              placeholder='Input your memo here'
              type='text'
              className='validate' />
            <label className='active'>
              Memo
            </label>
          </div>
          <div className='input-field col s6'>
            <button type='submit' className='waves-effect waves-light btn'>
              <i className='material-icons left'>input</i>Add
            </button>
          </div>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMemos: (memo) => dispatch(addMemos(memo))
  }
}

export default connect(null, mapDispatchToProps)(memoForm)
