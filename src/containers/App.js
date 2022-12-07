import React, { Component } from 'react';
//import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';

class App extends Component {
  state = { todoItem: 'Go for a walk' };

  render() {
    return(
      <div>
        <TodoItem
          todoItem = { this.state.todoItem }
        />
      </div>
    );
  }
}

export default App;