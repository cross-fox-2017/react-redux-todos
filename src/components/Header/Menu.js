import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <ul>
      <li className='menu-list'>
        <Link to='/'> News
        </Link>
      </li>
      <li className='menu-list'>
        <Link to='/author'> Author
        </Link>
      </li>
    </ul>
  )
}
