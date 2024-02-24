import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </div>
      <nav className={`menu-items ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="menu-item" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/portfolio" className="menu-item" onClick={toggleMenu}>
          Portfolio
        </Link>
        <Link to="/resume" className="menu-item" onClick={toggleMenu}>
          Resume
        </Link>
        <Link to="/contact" className="menu-item" onClick={toggleMenu}>
          Contact
        </Link>
      </nav>
    </>
  );
}

export default Header;