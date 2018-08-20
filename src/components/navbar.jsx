import React, { Component } from 'react';

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a href="#" className="navbar-brand">
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>{' '}
          <span class="fas fa-shopping-cart" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
