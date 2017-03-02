import React from 'react'
import TodosList from './TodosList.jsx'
import TodosAddForm from './TodosAddForm.jsx'

const style = {
  h5: {
    textAlign: 'left',
    color: '#01579b'
  }
}

const Todos = () => {

  return (
    <div className='container'>
      <br />
      <h5 style={style.h5}>List Todos</h5>
      <TodosList />
      <br />
      <br />
      <TodosAddForm />
    </div>
  )
}

export default Todos
