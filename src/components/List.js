import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchTodo } from '../action/FETCH_TODO';
import { deleteTodo } from '../action/DELETE_TODO';
import { doneTodo } from '../action/DONE_TODO';
import { saveTodo } from '../action/UPDATE_TODO';
// import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    listTodo: state.todolist
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTodo: () => dispatch(fetchTodo()),
  deleteTodo: list => dispatch(deleteTodo(list)),
  doneTodo: list => dispatch(doneTodo(list)),
  updateTodo: list => dispatch(saveTodo(list))
})


class List extends Component {
  constructor(){
    super()
    this.state = {
      updateMode : false,
      updateID : '',
      currentTitle: ''
    }
  }
  componentDidMount() {
    this.props.fetchTodo();
  }

  handleChange(e){
    this.setState({
      currentTitle: e.target.value
    })
  }

  handleEnter(e,list){
    if (e.keyCode === 13) {
      this.props.updateTodo({
        id: this.state.updateID,
        title: this.state.currentTitle,
        completed: list.completed
      })
      this.setState({
        updateMode: false,
        currentTitle: ''
      })
    }
  }

  renderList(){
    return this.props.listTodo.map( (list) =>{
      if (this.state.updateMode && this.state.updateID === list.id) {
        return (
          <tr key={list.id}>
            <td>
              <b>
                { (list.completed)
                  ? <i onClick={() => this.props.doneTodo(list)} className="doneBtnAfter material-icons">done</i>
                  : <i onClick={() => this.props.doneTodo(list)} className="doneBtn material-icons">done</i> }
              </b>
            </td>
            <td>
              <input onChange={this.handleChange.bind(this)}
                     onKeyUp={(e) => this.handleEnter(e,list)}
                     type="text"
                     value={this.state.currentTitle}/>
            </td>
            <td>
              {/* <button className="btn btn-outline-info">Update</button> */}
              <i onClick={() => this.props.deleteTodo(list)} className="clearBtn material-icons md-24">clear</i>
            </td>
          </tr>
        )
      }
      else {
        return (
          <tr key={list.id}>
            <td>
              <b>
                { (list.completed)
                  ? <i onClick={() => this.props.doneTodo(list)} className="doneBtnAfter material-icons">done</i>
                  : <i onClick={() => this.props.doneTodo(list)} className="doneBtn material-icons">done</i> }
              </b>
            </td>
            <td>
              <b>
                { (list.completed)
                  ? <strike onClick={ () => this.setState({updateMode: true, currentTitle: list.title, updateID: list.id}) } className="strike title">{list.title}</strike>
                  : <span onClick={ () => this.setState({updateMode: true, currentTitle: list.title, updateID: list.id}) } className="title">{list.title}</span> }
              </b>
            </td>
            <td>
              {/* <button className="btn btn-outline-info">Update</button> */}
              <i onClick={() => this.props.deleteTodo(list)} className="clearBtn material-icons md-24">clear</i>
            </td>
          </tr>
        )
      }
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
