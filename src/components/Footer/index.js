import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <footer className='page-footer teal' style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <div className='footer-copyright'>
          <div className='container'>
            Made by <a className='brown-text text-lighten-3' href='http://dhegana.com'>Ida Bagus Chahya Dhegana</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
