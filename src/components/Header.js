import React from 'react';
import MoonIcon from '../assets/images/icon-moon.svg';
import SunIcon from '../assets/images/icon-sun.svg';

const Header = () => {
  return(
    <header className="header">
      <h1 className="todo-h1">todo</h1>
      <button type="button" className="btn btn-toggle-mode">
        <img className="toggle-mode-icon" src={MoonIcon} alt="icon" />
      </button>
    </header>
  );
}

export default Header;