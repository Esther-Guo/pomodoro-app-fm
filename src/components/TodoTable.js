import React, {Component} from "react"
import DisplayArea from "./DisplayArea";
import FilterPanel from "./FilterPanel";
import InputField from "./InputField";
import './styles/TodoTable.css';
  
  class TodoTable extends Component {
    state = {
      todolist: [
        {id:0, text: 'Complete online JS course', checked: true},
        {id:1, text: 'Jog around the park', checked: false},
        {id:2, text: '10 minutes meditation', checked: false},
        {id:3, text: 'Read for 1 hour', checked: false},
        {id:4, text: 'Pick up groceries', checked: false},
        {id:5, text: 'Complete Todo app project', checked: false},
      ],
      filterType: 'All',
      inputText: '',
      todoCount: 6,
    }; 
  
    handleFilterTypeChange = (filterText) => {
      this.setState({
        filterType: filterText
      });
    }
  
    handleToggle = (todoid) => {
      let todos = this.state.todolist;
      todos.forEach(todo => {if (todo.id === todoid) todo.checked = !todo.checked});
      this.setState({
        todolist: todos
      });
    }
  
    handleDelete = (todoid) => {
      this.setState(prevState => ({
        todolist: prevState.todolist.filter(todo => 
          todo.id !== todoid)}));
    }
  
    handleClear = () => {
      this.setState(prevState => ({
        todolist: prevState.todolist.filter(todo => !todo.checked)
      }));
    }
  
    handleInputChange = (text) => {
      this.setState({
        inputText: text
      });
    }
  
    handleSubmit = () => {
      //e.preventDefault();
      if (this.state.inputText.length === 0) {
        return;
      }
      const newItem = {
        id: this.state.todoCount,
        text: this.state.inputText,
        checked: false,
      };
      this.setState(prevState => ({
        todolist: prevState.todolist.concat(newItem),
        inputText: '',
        todoCount: prevState.todoCount+1,
      }));
      
    }
  
    componentDidMount(){
      let visited = localStorage.getItem("alreadyVisited");
  
      if (visited) { // not first visit: load data from LocalStorage
          this.setState({
            todolist: JSON.parse(localStorage.getItem('LocalTodos') || []),
            todoCount: JSON.parse(localStorage.getItem('TodoCount')),
          });
      } else { // first visit
          localStorage.setItem("alreadyVisited", true);
      }
    }
  
    componentDidUpdate() {
      localStorage.setItem('LocalTodos', JSON.stringify(this.state.todolist));
      localStorage.setItem('TodoCount', this.state.todoCount);
    }
  
    render() {
      return (
        <div>
          <InputField text = {this.state.inputText} onInputChange={this.handleInputChange} onInputSubmit={this.handleSubmit} />
          <div className="main">
            <DisplayArea todos = {this.state.todolist} filterType={this.state.filterType} onItemChecked={this.handleToggle} onItemDeleted={this.handleDelete} />
            <FilterPanel todos = {this.state.todolist} filterType={this.state.filterType} onFilterTypeChange={this.handleFilterTypeChange} onItemsClear={this.handleClear}/>
          </div>
        </div>
      )
    }
  }

export default TodoTable
  