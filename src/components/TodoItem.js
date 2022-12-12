import React from 'react';
import CrossIcon from '../assets/images/icon-cross.svg';
import CheckIcon from '../assets/images/icon-check.svg';

const TodoItem = ({ todos, onDeleteButtonClick, onCompletedButtonClick, onClearCompletedButtonClick, changeStatus, status }) => {
  const todoList =  todos.map(todo => {
    const completed = todo.completed;

    return <div key={todo.id} className='todo-item-container'>
      <li className='todo-item'> 
        <label htmlFor="todo-completed" className='todo-checkbox-label'>
          <input type="checkbox" className='todo-checkbox-input' name="todo-completed" id="todo-completed" />
          <button 
            type="button" 
            className={`btn todo-completed-btn ${completed ? 'todo-completed' : ''}`}
            onClick={onCompletedButtonClick}
            data-todo={todo.id}
          >
            {completed ? <img src={CheckIcon} alt="check"/> : ''}
          </button>
        </label>
        <p 
          className={`todo ${completed ? 'cross-completed-todo' : ''}`}
          onClick={onCompletedButtonClick}
          data-todo={todo.id}
        >
          {todo.todoItem}
        </p> 
        
        <button type='button' className='btn delete-todo-btn' onClick={onDeleteButtonClick} data-todo={todo.id}>
          <img className='delete-todo-img' src={CrossIcon} alt="delete" />
        </button>
      </li>
    </div>
  })

  return(
    <div>
      <div>
        <ul className='todo-list'>
          {todoList}
        </ul>
        {
          todoList.length > 0 ? <div className="todo-detail-container">
            <span>{todoList.length} items left</span>
            <button type="button" className="btn todo-clear-completed-btn" onClick={onClearCompletedButtonClick}>Clear Completed</button>
          </div> : ''
        }
      </div>
      {todoList.length > 0 ? <div className="todo-detail-container" style={{borderRadius: '5px'}}>
        <button type="button" className={`btn todo-clear-completed-btn todo-select-btn ${status === 'all' ? 'active' : ''}`}  data-filter="all" onClick={changeStatus}>All</button>
        <button type="button" className={`btn todo-clear-completed-btn todo-select-btn ${status === 'active' ? 'active' : ''}`} onClick={changeStatus} data-filter="active">Active</button>
        <button type="button" className={`btn todo-clear-completed-btn todo-select-btn ${status === 'completed' ? 'active' : ''}`} onClick={changeStatus} data-filter="completed">Completed</button>
      </div> : ''}
    </div>
  );
}

export default TodoItem;