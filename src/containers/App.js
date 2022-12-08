import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';
//import TodoItem from '../components/TodoItem';

class App extends Component {
  state = { todoItem: ''};

  onInputChange = (e) => {
    this.setState({ todoItem: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <TodoInput
          inputChange = {this.onInputChange}
          inputValue = {this.state.todoItem}
          formSubmit = {this.onFormSubmit}
        /> 
      </div>
    );
  }
}

export default App;