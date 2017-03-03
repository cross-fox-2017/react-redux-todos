import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchTodo } from '../action/FETCH_TODO';
import { deleteTodo } from '../action/DELETE_TODO';
import { doneTodo } from '../action/DONE_TODO';
// import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    listTodo: state.todolist
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTodo: () => dispatch(fetchTodo()),
  deleteTodo: list => dispatch(deleteTodo(list)),
  doneTodo: list => dispatch(doneTodo(list))
})


class List extends Component {
  componentDidMount() {
    this.props.fetchTodo();
  }

  renderList(){
    return this.props.listTodo.map( (list, index) =>{
      return (
        <tr key={index}>
          <td>
            {
              (list.completed) ? <i onClick={() => this.props.doneTodo(list)} className="doneBtnAfter material-icons">done</i> : <i onClick={() => this.props.doneTodo(list)} className="doneBtn material-icons">done</i>
            }
          </td>
          <td>{list.title}</td>
          <td>
            {/* <button className="btn btn-outline-info">Update</button> */}
            <i onClick={() => this.props.deleteTodo(list)} className="clearBtn material-icons md-24">clear</i>
          </td>
        </tr>
      )
    })
  }

  render(){
    return(
      <table className="table">
        <tbody>
            {this.renderList()}
        </tbody>
      </table>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
