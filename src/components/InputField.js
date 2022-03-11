import React, {Component} from "react"

class InputField extends Component {
  
    handleInputChange = (e) => {
      this.props.onInputChange(e.target.value);
    }
  
    handleSubmit = (e) => {
      if (e.key === 'Enter') {
        this.props.onInputSubmit();
      }
    }
  
    render() {
      const text = this.props.text;
  
      return (
        <div className="input-textbox">
        <div className="todo-circle"></div>
        <input type="text" className="todo-input" id="todo-input" placeholder="Create a new todo..." maxLength="40" autoComplete="off" value={text} onChange={this.handleInputChange} onKeyUp={this.handleSubmit}/>
        </div>
      )
    }
  }

export default InputField