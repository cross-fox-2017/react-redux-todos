import React from 'react'
import logo from '../logo.svg';
import { Container } from 'semantic-ui-react'

export const Header = () =>{
  return (
    <Container text>
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to Syanmil ToDo React</h2>
    </Container>
  )
}
