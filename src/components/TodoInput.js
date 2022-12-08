import React from 'react';

const TodoInput = ({ inputChange }) => {
  return(
      <form>
        <input 
          type="text" 
          placeholder="Create a new todo..."
          onChange={inputChange}
        />
      </form>
    );
}

export default TodoInput;