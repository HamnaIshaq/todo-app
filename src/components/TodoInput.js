import React from 'react';

const TodoInput = ({ inputChange, inputValue }) => {
  return(
      <form>
        <input 
          type="text" 
          placeholder="Create a new todo..."
          value={inputValue}
          onChange={inputChange}
        />
      </form>
    );
}

export default TodoInput;