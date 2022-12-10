import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';

class App extends Component {
  state = { 
    todoItem: '', 
    todoList: []
  };

  onInputChange = (e) => {
    this.setState({ todoItem: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.setState({ todoList: [...this.state.todoList, this.state.todoItem] });
    this.setState({ todoItem: '' });
  }

  onDeleteButtonClick = (e) => {
    const deleteTodo = e.currentTarget.getAttribute('data-todo');
    this.setState({ todoList: this.state.todoList.filter(todo => todo !== deleteTodo)})
  }

  render() {
    return(
      <div className='todo-container'>
        <TodoInput
          inputChange = {this.onInputChange}
          inputValue = {this.state.todoItem}
          formSubmit = {this.onFormSubmit}
        /> 
        <TodoItem 
          todos = {this.state.todoList}
          onDeleteButtonClick={this.onDeleteButtonClick}
        />
      </div>
    );
  }
}

export default App;