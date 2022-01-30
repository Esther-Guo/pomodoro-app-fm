import React, {Component} from "react"

import icon_cross from './img/icon-cross.svg'
import icon_check from './img/icon-check.svg'

class CheckButton extends Component {

    handleToggle = () => {
      this.props.onItemChecked();
    }
  
    render() {
      return (
        <button className="btn todo-check" onClick={this.handleToggle}>
          <img src={icon_check} alt="" />
          {/*or*/}
          {/* <img src={require('../images/icon-check.svg').default} alt="" /> */}
        </button>
      )
    }
  }
  
  class TodoContent extends Component {
    render() {
      const content = this.props.content;
  
      return (
        <p>
          {content}
        </p>
      )
    }
  }
  
  class DeleteButton extends Component {
  
    handleDelete = () => {
      this.props.onItemDeleted();
    }
  
    render() {
      return (
        <button className="btn todo-delete" onClick={this.handleDelete}>
          <img src={icon_cross} alt="" />
        </button>
      )
    }
  }
  
  
  
  class TodoItem extends Component {
  
    handleToggle = () => {
      this.props.onItemChecked(this.props.content.id);
    }
  
    handleDelete = () => {
      this.props.onItemDeleted(this.props.content.id);
    }
  
    render() {
      const checkStatus = this.props.content.checked;
      return (
        <li className = {`todo-element ${checkStatus? 'todo-element-check':''}`} >
          <CheckButton checked = {checkStatus} onItemChecked={this.handleToggle}/>
          <TodoContent content = {this.props.content.text} />
          <DeleteButton onItemDeleted={this.handleDelete}/>
        </li>
      )
    }
  }
  
  

  
  class DisplayArea extends Component {
  
    handleToggle = (todoid) => {
      this.props.onItemChecked(todoid);
    }
  
    handleDelete = (todoid) => {
      this.props.onItemDeleted(todoid);
    }
  
    render() {
  
      const filter = this.props.filterType;
      let todos = this.props.todos;
      const items = [];
  
      if (filter === 'Active') {
        todos = todos.filter(todo => {
          return !todo.checked;
        })
      }
      if (filter === 'Completed') {
        todos = todos.filter(todo => {
          return todo.checked;
        })
      }
      todos.forEach(todo => {
        items.push(
          <TodoItem content={todo} key={todo.id} onItemChecked={this.handleToggle} onItemDeleted={this.handleDelete} />
        );
      });
      return (
        <ul className="todo-list" id="todo-list">
          {items}
        </ul>
      )
    }
  }
  
export default DisplayArea