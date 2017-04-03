import React, { Component } from 'react'
import MemoList from './memos'
import MemoForm from './memoForm'

class Todos extends Component {
  render () {
    return (
      <div className='row' style={{ marginTop: 50 }}>
        <div className='col s6 offset-s3'>
          <div className='card'>
            <div className='card-content'>
              <div className='card-title center teal-text' style={{ marginBottom: 25, fontSize: 36 }}>
                Todos
              </div>
              <MemoList />
              <MemoForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Todos
