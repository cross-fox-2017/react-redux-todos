import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchMemos, deleteMemo, updateMemo, updateComplete } from '../../actions'

class Memos extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentlyEditingId: 0,
      currentlyEditingInput: '',
    }
  }

  componentDidMount () {
    this.props.fetchMemos()
  }

  handleInputEditChange = (e) => {
    this.setState({
      currentlyEditingInput: e.target.value
    })
  }

  memoList(){
    const that = this
    return this.props.memos.map((item, index) => {
      return (
        <li className='collection-item' key={index}>
          <div>
            <form className='completed-checkbox'>
              <p style={{ display: 'inline-block' }}>
               {item.completed}
                <input
                  onChange={() => this.props.updateComplete(item.id, item.memo, item.completed)}
                  type='checkbox'
                  checked={item.completed === 'true' ? "checked" : ""}
                />
              </p>
            </form>

            {item.id === this.state.currentlyEditingId ?
            <form
              style={{ width: '75%', display: 'inline-block' }}
              onSubmit={e => {
                e.preventDefault()
                this.props.updateMemo(item.id, this.state.currentlyEditingInput)
                setTimeout(function(){
                  that.setState({
                    currentlyEditingId: 0,
                    currentlyEditingInput: ''
                  })
                },200)
              }}>
              <input onChange={this.handleInputEditChange} type='text' defaultValue={item.memo} />
              <button type='submit' className='waves-effect waves-light btn'>
                <i className='material-icons left'>input</i>Update
              </button>
            </form> : item.memo}

             <a href='#' onClick={e => {
                                    e.preventDefault()
                                    if (item.id === this.state.currentlyEditingId) {
                                      this.setState({
                                        currentlyEditingId: 0,
                                        currentlyEditingInput: ''
                                      })
                                    } else {
                                      this.setState({
                                        currentlyEditingId: item.id,
                                        currentlyEditingInput: item.memo
                                      })
                                    }

                                  // this.props.updateMemo(item.id)
                                  }} className='secondary-content'><i className='material-icons'>update</i></a>
             <a href='#' onClick={e => {
                                    e.preventDefault()
                                    let confirmDelete = confirm('Are you sure you want to delete id ' + item.id)
                                    if (confirmDelete) {
                                      this.props.deleteMemo(item.id)
                                    }
                                  }} className='secondary-content'><i className='material-icons'>delete</i></a>
           </div>
         </li>
      )
    })
  }

  render () {
    return (
      <div>
        <ul className='collection with-header'>
          {this.memoList()}
        </ul>
        <p style={{textAlign: 'center'}}>
          You Have
          {' '}
          {this.props.memos.length} Memo
        </p>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    memos: state.memos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMemos: () => dispatch(fetchMemos()),
    deleteMemo: (id) => dispatch(deleteMemo(id)),
    updateMemo: (id, memo) => dispatch(updateMemo(id, memo)),
    updateComplete: (id, memo, task) => dispatch(updateComplete(id, memo, task))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Memos)
