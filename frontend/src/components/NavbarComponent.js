// src/components/NavbarComponent.js

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';

function NavbarComponent({ setIsAuthenticated }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const headerContentHeight = window.innerHeight;
      if (window.scrollY > headerContentHeight - 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    setIsAuthenticated(false);
    navigate('/login');
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const handleNavLinkClick = () => {
    // Close mobile menu when a link is clicked
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className={`w-100 ${isScrolled ? 'scrolled' : ''}`}
      fixed="top"
      expanded={isMenuOpen}
      onToggle={() => setIsMenuOpen(!isMenuOpen)}
    >
      <Container fluid className="px-5">
        <Navbar.Brand as={Link} to="/home" className='logo' onClick={handleNavLinkClick}>
          <img src="/icons/TDLogo.png" alt="Think Driven Logo" className="navbar-logo" />
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="navbar-toggler"
        />
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/home" 
              className={isActiveLink('/home') ? 'active' : ''}
              onClick={handleNavLinkClick}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/blogs" 
              className={isActiveLink('/blogs') ? 'active' : ''}
              onClick={handleNavLinkClick}
            >
              Blogs
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/youtube" 
              className={isActiveLink('/youtube') ? 'active' : ''}
              onClick={handleNavLinkClick}
            >
              Youtube
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/team" 
              className={isActiveLink('/team') ? 'active' : ''}
              onClick={handleNavLinkClick}
            >
              Team
            </Nav.Link>
            <Button 
              variant="outline-light" 
              onClick={handleLogout} 
              className="ms-2 logout-btn"
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;