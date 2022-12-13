import React, { Component } from 'react';
import uuid from 'react-uuid';
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';

class App extends Component {
  state = { 
    todoItem: '', 
    todoList: [],
    filteredTodoList: [],
    status: 'all'
  };

  onInputChange = (e) => {
    this.setState({ todoItem: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.setState({ todoList: [...this.state.todoList, {todoItem: this.state.todoItem, completed: false, id: uuid()}] });
    this.setState({ filteredTodoList: [...this.state.todoList, {todoItem: this.state.todoItem, completed: false, id: uuid()}]});
    this.setState({ todoItem: '' });
  }

  onDeleteButtonClick = (e) => {
    const deleteTodo = e.currentTarget.getAttribute('data-todo');
    this.setState({ todoList: this.state.todoList.filter(todo => todo.id !== deleteTodo)})
    this.setState({ filteredTodoList: this.state.todoList.filter(todo => todo.id !== deleteTodo)})
  }

  onCompletedButtonClick = (e) => {
    const clickedTodo = e.currentTarget.getAttribute('data-todo');
    const completedTodos = this.state.todoList.filter(todo => {
      if(todo.id === clickedTodo) {
        todo.completed = !todo.completed; 
      }
      return todo      
    })
    this.setState({ filteredTodoList: completedTodos })
  }

  onClearCompletedButtonClick = () => {
    const completedTodos = this.state.todoList.filter(todo => todo.completed !== true)
    this.setState({ filteredTodoList: completedTodos })
    this.setState({ todoList: completedTodos })
  }

  changeStatus = (e) => {
    this.setState({ status: e.target.value });
  }

  onFilterTodoList = () => {
    switch(this.state.status) {
      case 'completed':
        this.setState({ filteredTodoList: this.state.todoList.filter(todo => todo.completed === true)});
        break;
      case 'active':
        this.setState({ filteredTodoList: this.state.todoList.filter(todo => todo.completed === false) });
        break;
      default:
        this.setState({ filteredTodoList: this.state.todoList });
        break;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.status !== this.state.status) {
      this.onFilterTodoList();
    }
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
          todos = {this.state.filteredTodoList}
          onDeleteButtonClick={this.onDeleteButtonClick}
          onCompletedButtonClick={this.onCompletedButtonClick}
          onClearCompletedButtonClick={this.onClearCompletedButtonClick}
          changeStatus={this.changeStatus}
          status={this.state.status}
        />
      </div>
    );
  }
}

export default App;