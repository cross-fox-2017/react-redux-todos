import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchData } from './Actions'
import {Header, InputTodo, ItemList} from './Components'


class App extends Component {
  componentWillMount(){
    this.props.fetchData()
  }
  render() {
    return (
      <Container>
        <Header />
        <InputTodo />
        <ItemList />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchData}, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
