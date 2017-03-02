import React from 'react'

const memoForm = () => {
  return (
    <form>
      <div className='row'>
        <div className='input-field col s6'>
          <input
            value=''
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

export default memoForm
