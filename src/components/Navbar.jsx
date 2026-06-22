// import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
          Sharanya <span>Legal</span>
        </a>
        <ul className="navbar-links">
          <li><a href="/#services">Services</a></li>
          <li><a href="/#drafting">Drafting</a></li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/#compliance">Compliance</a></li>
        </ul>
        <a href="/#drafting" className="btn-primary navbar-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>Get Started</a>
      </div>
    </nav>
  );
};

export default Navbar;
