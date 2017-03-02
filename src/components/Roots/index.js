import React from 'react'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import News from '../News/Main.js'
import Author from '../People/Main.js'


export const Roots = () => {
    return (
        <Router>
            <div>
                <Route exact path='/' component={News}/>
                <Route exact path='/author' component={Author}/>
                <ul>
                    <li className='menu-list'>
                        <Link to='/'>
                            News
                        </Link>
                    </li>
                    <li className='menu-list'>
                        <Link to='/author'>
                            Author
                        </Link>
                    </li>
                </ul>

            </div>
        </Router>
    )
}
