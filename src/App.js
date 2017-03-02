import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Todos from './components/Todos'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Todos />
        <Footer />
      </div>
    )
  }
}

export default App
