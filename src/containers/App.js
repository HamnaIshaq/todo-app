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

    this.setState({ todoList: [...this.state.todoList, {todoItem: this.state.todoItem, completed: false}] });
    this.setState({ todoItem: '' });
  }

  onDeleteButtonClick = (e) => {
    const deleteTodo = e.currentTarget.getAttribute('data-todo');
    this.setState({ todoList: this.state.todoList.filter(todo => todo.todoItem !== deleteTodo)})
  }

  onCompletedButtonClick = (e) => {
    const clickedTodo = e.currentTarget.getAttribute('data-todo');
    const completedTodos = this.state.todoList.filter(todo => {
      if(todo.todoItem === clickedTodo) {
        todo.completed = !todo.completed; 
      }
      return todo      
    })
    this.setState({ todoList: completedTodos })
  }

  onClearCompletedButtonClick = () => {
    const completedTodos = this.state.todoList.filter(todo => todo.completed !== true)
    this.setState({ todoList: completedTodos })
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
          onCompletedButtonClick={this.onCompletedButtonClick}
          onClearCompletedButtonClick={this.onClearCompletedButtonClick}
        />
      </div>
    );
  }
}

export default App;