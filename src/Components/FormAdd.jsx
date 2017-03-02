import React from 'react'
import { Button, Form } from 'react-semantic-ui'

export const FormAdd = () =>{
  return (
    <form>
      <label>New Todo</label>
      <input placeholder='Add New ToDo' />
      <button type='submit'>Add Todo</button>
    </form>
  )
}
