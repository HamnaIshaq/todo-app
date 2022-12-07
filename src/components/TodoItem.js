import React from 'react';
import '../assets/style.css';

const TodoItem = (props) => {
  return(
    <div className='todo-container'>
      <ul>
        <li>{ props.todoItem } <span>X</span></li>
      </ul>
    </div>
  );
}

export default TodoItem;