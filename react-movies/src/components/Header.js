import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>React Movies</h1>
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/favorite"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <li>Favorite</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
