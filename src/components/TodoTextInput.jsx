import React , { PropTypes } from 'react'


class TodoTextInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text : this.props.text || ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

  handleSubmit(e){
    e.preventDefault()
    const text = this.state.text.trim()
        this.props.addingTodo(text)
        this.setState({text:''})
  }
  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }


  render(){
    return(
      <div className="input-field col s6">
        <form onSubmit={this.handleSubmit}>
         <input
           value={this.state.text}
           onChange={this.handleChange}
           placeholder="Todos"
           type="text"
           className="validate" />
         </form>
       </div>

    )
  }

}

TodoTextInput.propTypes = {
  text : PropTypes.string,
  placeholder: PropTypes.string,
}

export default TodoTextInput
