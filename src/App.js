import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import News from './components/News/Main.js'
import Author from './components/People/Main.js'

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={News} />
      <Route exact path='/author' component={Author} />
    </div>
  </Router>
)

export default App
