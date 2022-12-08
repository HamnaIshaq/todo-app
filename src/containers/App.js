import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';
//import TodoItem from '../components/TodoItem';

class App extends Component {
  state = { todoItem: ''};

  onInputChange = (e) => {
    this.setState({ todoItem: e.target.value });
  }

  render() {
    return(
      <div>
        <TodoInput
          inputChange = {this.onInputChange}
        /> 
      </div>
    );
  }
}

export default App;