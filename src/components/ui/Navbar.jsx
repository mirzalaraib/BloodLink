// src/components/ui/Navbar.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogoIcon } from '../auth/HeroPanel';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleAuthClick = () => {
    navigate('/login');
    closeMenu();
  };

  return (
    <>
      <nav className="main-navbar">
        <div className="navbar-container">
          {/* Logo Section */}
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <div className="nav-logo-icon">
              <LogoIcon color="white" size={24} />
            </div>
            <span className="nav-logo-text">
              Blood<span>Link</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="nav-links">
            <a href="/" className="nav-link">Home</a>
            <a href="#donate" className="nav-link">Donate Blood</a>
            <a href="#find" className="nav-link">Find Donor</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button className="nav-btn-primary" onClick={handleAuthClick}>Login / Register</button>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`nav-overlay ${isMenuOpen ? 'visible' : ''}`} 
        onClick={closeMenu}
      ></div>

      {/* Mobile Sidebar */}
      <aside className={`nav-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="nav-logo">
            <div className="nav-logo-icon">
              <LogoIcon color="white" size={20} />
            </div>
            <span className="nav-logo-text">
              Blood<span>Link</span>
            </span>
          </div>
        </div>
        
        <div className="sidebar-links">
          <Link to="/" className="sidebar-link" onClick={closeMenu}>
            <span className="link-icon">🏠</span> Home
          </Link>
          <a href="#about" className="sidebar-link" onClick={closeMenu}>
            <span className="link-icon">ℹ️</span> About Us
          </a>
          <a href="#contact" className="sidebar-link" onClick={closeMenu}>
            <span className="link-icon">📞</span> Contact
          </a>
          <button 
            className="nav-btn-primary" 
            onClick={handleAuthClick}
            style={{ marginTop: '1rem', width: '100%' }}
          >
            Login / Register
          </button>
        </div>

        <div className="sidebar-footer">
          <p className="sidebar-footer-text">Available 24/7 for emergencies</p>
          <button className="btn-primary" style={{ marginTop: '0.5rem' }}>
            Need Help?
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
