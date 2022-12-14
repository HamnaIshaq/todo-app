import React from 'react';
import CrossIcon from '../assets/images/icon-cross.svg';
import CheckIcon from '../assets/images/icon-check.svg';

const TodoItem = ({ todos, onDeleteButtonClick, onCompletedButtonClick, onClearCompletedButtonClick, changeStatus, status, totalTodos }) => {
  const todoList =  todos.map(todo => {
    const completed = todo.completed;

    return <div key={todo.id} className='todo-item-container'>
      <li className='todo-item'> 
        <label htmlFor={todo.id} className='todo-checkbox-label'>
          <input type="checkbox" className='todo-checkbox-input' name="todo-completed" id={todo.id} onChange={onCompletedButtonClick} data-todo={todo.id}/>
          <span className={`btn todo-completed-btn ${completed ? 'todo-completed' : ''}`}>
            {completed ? <div className="check-icon-container"><img className="check-icon" src={CheckIcon} alt="check"/></div> : ''}
          </span>
        </label>
        <p className={`todo ${completed ? 'cross-completed-todo' : ''}`}>
          {todo.todoItem}
        </p> 
        
        <button type='button' className='btn delete-todo-btn' onClick={onDeleteButtonClick} data-todo={todo.id}>
          <img className='delete-todo-img' src={CrossIcon} alt="delete" />
        </button>
      </li>
    </div>
  })

  const activeTodosLeft = totalTodos.filter(todo => todo.completed === false)

  return(
    <div>
      <div className='todo-items-container'>
        <ul className='todo-list'>
          {todoList}
        </ul>
        {
          todoList.length > 0 ? <div className="todo-detail-container">
            <span>{activeTodosLeft.length} items left</span>
            <button type="button" className="btn todo-clear-completed-btn" onClick={onClearCompletedButtonClick}>Clear Completed</button>
          </div> : ''
        }
      </div>
      {todoList.length > 0 ? <div className="todo-detail-container" style={{borderRadius: '5px'}}>
        <label htmlFor="all" className={`btn todo-clear-completed-btn todo-select-btn ${status === 'all' ? 'active' : ''}`}>
          <input type="radio" name="todo-status" id="all" className="radio-input" value="all" onChange={changeStatus} />
          All
        </label>
        <label htmlFor="active" className={`btn todo-clear-completed-btn todo-select-btn ${status === 'active' ? 'active' : ''}`}>
          <input type="radio" name="todo-status" id="active" className="radio-input" value="active" onChange={changeStatus} />
          Active
        </label>
        <label htmlFor="completed" className={`btn todo-clear-completed-btn todo-select-btn ${status === 'completed' ? 'active' : ''}`}>
          <input type="radio" name="todo-status" id="completed" className="radio-input" value="completed" onChange={changeStatus} />
          Completed
        </label>
      </div> : ''}
    </div>
  );
}

export default TodoItem;