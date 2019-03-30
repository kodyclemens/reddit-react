import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <NavLink to="/" exact className="navbar-brand">Reddit Browser</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/" exact className="nav-link">Home</NavLink>
              <NavLink to="/search" exact className="nav-link">Search</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
}

export default NavBar;