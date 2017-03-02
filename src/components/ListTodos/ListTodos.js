import React, { Component } from 'react'
import '../../App.css'
import { connect } from 'react-redux'
import { Header } from '../Header/Header'
import { GetAll } from '../../actions/index.js' // nama GetAll Harus sama dengan index.js pada actions
import { Table } from 'semantic-ui-react'


class ListTodos extends Component {
  componentDidMount(){
    this.props.getAllData()
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <h1>Listpedia</h1>
        <div className='center'>
          <Table singleLine>
            <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>No</Table.HeaderCell>
                  <Table.HeaderCell>Title</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
                <Table.Body>
                    {this.props.getlisttodos.map((item,index) => {
                         return (
                           <Table.Row key={item.id}>
                                <Table.Cell>{index+1}</Table.Cell>
                                <Table.Cell>{item.title}</Table.Cell>
                                <Table.Cell>{item.description}</Table.Cell >
                                <Table.Cell>{item.status===false ? "false" : "true"}</Table.Cell>
                           </Table.Row>

                         )
                       })
                     }
               </Table.Body>
           </Table>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    getlisttodos: state.todosdata
  }
}

const mapDispatchToProps = dispatch => ({
  getAllData: () => dispatch(GetAll())
});

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({GetAll},dispatch)
// }



export default connect(mapStateToProps, mapDispatchToProps)(ListTodos)
