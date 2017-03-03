import React from 'react'
import logo from '../logo.svg'
import '../App.css'

export const Header = () => {
  return (
    <div className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <h6>React - Redux Todos</h6>
    </div>
  )
}
