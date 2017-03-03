import React, { Component } from 'react'
import '../../App.css'
import { connect } from 'react-redux'
import InputTodos from './InputTodos.js'
import { Header } from '../Header/Header.js'
import { GetAll, deleteDataTodos, completeDataTodos, uncompleteDataTodos } from '../../actions/index.js'
import { Table, Icon} from 'semantic-ui-react'

class Main extends Component {
  componentDidMount(){
    this.props.getAllData()
  }
  render () {
    return (
      <div className='App'>
        <Header />
        <h1>Todopedia</h1>
        <InputTodos />
          <div className='center showlisttodos'>
            <Table singleLine>
              <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>No</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
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
                                  <Table.Cell>
                                    <a onClick={()=>this.props.deleteTodos(item.id)} className="actionTodos" href="#"><Icon name='delete' /></a>
                                    {/*<a className="actionTodos" href="#"><Icon name='edit' /></a>*/}
                                    {item.status===false
                                      ? <a onClick={()=>this.props.completeTodos(item.id, item.title, item.description)} href="#"><Icon name='checkmark box' /></a>
                                      :<a onClick={()=>this.props.uncompleteTodos(item.id, item.title, item.description)} href="#"><Icon name='minus circle'/></a>}
                                  </Table.Cell>
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
  getAllData: () => dispatch(GetAll()),
  deleteTodos: (id) => dispatch(deleteDataTodos(id)),
  completeTodos: (id,title,description) => dispatch(completeDataTodos(id,title,description)),
  uncompleteTodos: (id,title,description) => dispatch(uncompleteDataTodos(id,title,description))
})
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({GetAll},dispatch)
// }

export default connect(mapStateToProps, mapDispatchToProps)(Main)
