import React, { Component } from 'react'
import '../../App.css'
import { connect } from 'react-redux'
import InputTodos from './InputTodos.js'
import { Header } from '../Header/Header.js'

class Main extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <h1>Add Todos</h1>
        <InputTodos />
        <ul className='center'>
          {this.props.news
             .map((item, index) => {
               return (
                 <li key={index}>
                   <a href={item.url} className='style-text' target='_blank'>
                     {item.title}
                   </a>
                 </li>
               )
             })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.searchKeyword
  }
}

export default connect(mapStateToProps)(Main)
