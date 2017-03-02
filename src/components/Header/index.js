import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <nav className='white' role='navigation'>
        <div className='nav-wrapper container'>
          <a id='logo-container' href='http://localhost:3000' className='brand-logo'>React Redux Todos</a>
        </div>
      </nav>
    )
  }
}

export default Header
