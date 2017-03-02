import React from 'react'
import TodosList from './TodosList.jsx'

const style = {
  h5: {
    textAlign: 'left',
    color: '#01579b'
  },
  tr: {
    color: '#558b2f'
  },
  input: {
    width: '30%',
    padding: '0px 10px',
    textAlign: 'left'
  }
}

const Todos = () => {

  return (
    <div className='container'>
      <TodosList />
      <input
        style={style.input}
        id='add'
        type='text'
        placeholder='Add to list...'></input>
      {'  '}
      <button type='button' className='btn light-green darken-3'>
        <i className='material-icons'>add</i>
      </button>
    </div>
  )
}

export default Todos
