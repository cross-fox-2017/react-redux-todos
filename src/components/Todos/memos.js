import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchMemos, deleteMemo, updateMemo } from '../../actions'

class Memos extends Component {

  constructor (props) {
    super(props)
    this.state = {
      currentlyEditingId: 0,
      currentlyEditingInput: ''
    }
  }
  componentDidMount () {
    this.props.fetchMemos()
  }
  handleInputEditChange (e) {
    this.setState({
      currentlyEditingInput: e.target.value
    })
  }

  render () {
    return (
      <ul className='collection with-header'>
        {this.props.memos
           .map((item, index) => {
             return (
               <li className='collection-item' key={index}>
                 <div>
                   {item.id === this.state.currentlyEditingId ?
                      <form onSubmit={e => {
                                      e.preventDefault()
                                      this.props.updateMemo(item.id, this.state.currentlyEditingInput)
                                    }} style={{ width: '75%', display: 'inline-block' }}>
                        <input onChange={this.handleInputEditChange.bind(this)} type='text' defaultValue={item.memo} />
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
           })}
      </ul>
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
    updateMemo: (id, memo) => dispatch(updateMemo(id, memo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Memos)
