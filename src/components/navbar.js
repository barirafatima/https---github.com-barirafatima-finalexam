import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
function Navbar() {
    return (
      <nav className="navbar">
        <h1>GuTech Exam Store</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    );
}

export default Navbar;
