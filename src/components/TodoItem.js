import React from 'react';
import CrossIcon from '../assets/images/icon-cross.svg';
import CheckIcon from '../assets/images/icon-check.svg';

const TodoItem = ({ todos, onDeleteButtonClick }) => {
  
  const todoList =  todos.map((todo, index) => {
    return <div key={index} className='todo-item-container'>
      <li className='todo-item'> 
        <label htmlFor="todo-completed" className='todo-checkbox-label'>
          <input type="checkbox" className='todo-checkbox-input'  name="todo-completed" id="todo-completed" />
          <button type="button" className="btn todo-completed-btn">
            {/*<img className="todo-completed-img" src={CheckIcon} alt="check" />*/}
          </button>
        </label>
        <p className='todo'>{todo}</p> 
        
        <button type='button' className='btn delete-todo-btn' onClick={onDeleteButtonClick} data-todo={todo}>
          <img className='delete-todo-img' src={CrossIcon} alt="delete" />
        </button>
      </li>
    </div>
  })

  return(
    <div>
      <ul className='todo-list'>
        {todoList}
      </ul>
    </div>
  );
}

export default TodoItem;