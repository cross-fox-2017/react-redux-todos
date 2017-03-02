import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchMemos, deleteMemo } from '../../actions'

class Memos extends Component {
  componentDidMount () {
    this.props.fetchMemos()
  }

  render () {
    return (
      <ul className='collection with-header'>
        {this.props.memos
           .map((item, index) => {
             return (
               <li className='collection-item' key={index}>
                 <div>
                   {item.memo}
                   <a href='#' onClick={e => {
                                          e.preventDefault()
                                          this.props.updateMemo(item.id)
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

// <input type='text'></input>
// <button type='submit' className='waves-effect waves-light btn'>
//   <i className='material-icons left'>input</i>Update
// </button>

const mapStateToProps = (state) => {
  return {
    memos: state.memos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMemos: () => dispatch(fetchMemos()),
    deleteMemo: (id) => dispatch(deleteMemo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Memos)
