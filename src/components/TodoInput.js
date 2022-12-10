import React from 'react';

const TodoInput = ({ inputChange, inputValue, formSubmit }) => {
  return(
      <form onSubmit={formSubmit}>
        <input 
          type="text" 
          placeholder="Create a new todo..."
          className="todo-input"
          value={inputValue}
          onChange={inputChange}
        />
      </form>
    );
}

export default TodoInput;