import React, { Component } from 'react'
import '../../App.css'
import { connect } from 'react-redux'
import Search from './Search.js'
import { Header } from '../Header/Header.js'

class Main extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <h1>Hacktiv8 News</h1>
        <Search />
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
