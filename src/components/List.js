import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchTodo } from '../action/FETCH_TODO';
// import { bindActionCreators } from 'redux';



const mapStateToProps = (state) => {
  return {
    listTodo: state.todolist
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTodo: () => dispatch(fetchTodo())
})


class List extends Component {
  componentDidMount() {
    this.props.fetchTodo();
  }

  renderList(){
    return this.props.listTodo.map( (list, index) =>{
      return (
        <tr key={index}>
          <td>{list.title}</td>
          <td>
            <p>{`${list.completed}`}</p>
            {/* <input type="checkbox" className="custom-control-input"/> */}
          </td>
          <td>
            <button className="btn btn-outline-info">Update</button>
            <button className="btn btn-outline-danger">Delete</button>
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
