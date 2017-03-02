import React from 'react'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import News from './components/News/Main.js'
import ListTodos from './components/ListTodos/ListTodos.js'

const App = () => (
  <div className="App">
    <Router>
        <div>
            <ul className="menu-top">
              <li className='menu-list'>
                  <a className="active">Todopedia</a>
              </li>
                <li className='menu-list'>
                    <Link to='/'>
                        Add Todos
                    </Link>
                </li>
                <li className='menu-list'>
                    <Link to='/listtodos'>
                        Get All Todos
                    </Link>
                </li>
            </ul>
            <Route exact path='/' component={News}/>
            <Route exact path='/listtodos' component={ListTodos}/>
        </div>
    </Router>
  </div>

)

export default App
