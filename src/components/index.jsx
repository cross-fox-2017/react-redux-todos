import React from 'react'
import CreateTodoForm from './CreateTodoForm'
import TodosTable from './TodosTable'

const Todos = () => (
  <div className="Todos-body">
    <CreateTodoForm />
    <TodosTable />
  </div>
)

export default Todos
