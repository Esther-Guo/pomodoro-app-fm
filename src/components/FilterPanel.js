import React, {Component} from "react"

class FilterButton extends Component {
  
  handleFilterTypeChange = (e) => {
    this.props.onFilterTypeChange(e.target.value);
  }

  render() {
    const type = this.props.filterType;
    const selected = this.props.selected;
    return (
      <span>
      <input type="radio" name="filter" id={type} value={type} className="btn" defaultChecked={selected === type? true:false} onChange={this.handleFilterTypeChange} />
      <label className="btn btn-bold" htmlFor={type}>{type}</label>
      </span>
    )
  }
}

class ClearButton extends Component {
  
  handleClear = () => {
    const count = this.props.clearCount;
    if (count > 0 && window.confirm(`You are about to remove ${count} completed task(s). Are you sure?`)) {
      this.props.onItemsClear();
    }
  }

  render() {
    return (
      <button className="btn btn-bold completed" id="clear-completed" onClick={this.handleClear}>
      Clear Completed
      </button>
    )
  }
}

class FilterPanel extends Component {
  
    handleFilterTypeChange = (filterText) => {
      this.props.onFilterTypeChange(filterText);
    }
  
    handleClear = () => {this.props.onItemsClear()};
  
    render() {
  
      const activeCount = this.props.todos.filter((todo) => {return !todo.checked}).length;
      const clearCount = this.props.todos.filter((todo) => {return todo.checked}).length;
      const filter = this.props.filterType;
  
      return (
        <div>
          <span className="todo-bottom-side">
            <p className="btn"><span id="items-count">{activeCount}</span> item(s) left</p>
            <ClearButton clearCount={clearCount} onItemsClear={this.handleClear}/>
          </span>
          <span className="todo-filter">
            <FilterButton filterType="All" selected={filter} onFilterTypeChange={this.handleFilterTypeChange} />
            <FilterButton filterType="Active" selected={filter} onFilterTypeChange={this.handleFilterTypeChange}/>
            <FilterButton filterType="Completed" selected={filter} onFilterTypeChange={this.handleFilterTypeChange}/>
          </span>
        </div>
      )
    }
  }

export default FilterPanel