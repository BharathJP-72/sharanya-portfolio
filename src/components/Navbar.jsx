// import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          Sharanya <span>Legal</span>
        </div>
        <ul className="navbar-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#drafting">Drafting</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#compliance">Compliance</a></li>
        </ul>
        <button className="btn-primary navbar-btn">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
