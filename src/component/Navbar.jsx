import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, NavItem } from "reactstrap";

const Navbar = () => {
  return (
    <BootstrapNavbar light expand="md" className="px-5 bg-dark sticky-top  ">
      <Link className="navbar-brand fs-5 text-white" to="/">
        <strong>MyWebsite</strong>
      </Link>
      <Nav className="ml-auto fs-5 " navbar>
        <NavItem>
          <Link className="nav-link text-white" to="/">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link text-white" to="/course">
            Courses
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link text-white" to="/about">
            About
          </Link>
        </NavItem>
      </Nav>
    </BootstrapNavbar>
  );
};

export default Navbar;
