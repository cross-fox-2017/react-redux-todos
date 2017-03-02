import React, { Component } from 'react'
import '../../App.css'
import { connect } from 'react-redux'

import { Header } from '../Header/Header'

class People extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <h1>Hacktiv8 Author</h1>
        <ul className='center'>
          {this.props.people
             .map((item, index) => {
               return (
                 <p key={index}>
                   <a>
                     {item.author}
                   </a>
                 </p>
               )
             })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.news
  }
}

export default connect(mapStateToProps)(People)
