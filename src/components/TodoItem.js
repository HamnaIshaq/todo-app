import React from 'react';
import '../assets/style.css';

const TodoItem = ({ todos }) => {
  
  const todoList =  todos.map((todo, index) => {
    return <li key={index}> {todo} <span>X</span></li>
  })

  return(
    <div className='todo-container'>
      <ul>
        {todoList}
      </ul>
    </div>
  );
}

export default TodoItem;