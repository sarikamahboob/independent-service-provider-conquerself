import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../Images/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" />
            <span>ConquerSelf</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={NavLink}
                to="/home"
                className={({ isActive }) => (isActive ? "active" : "nav-link")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "nav-link")}
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "nav-link")}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/blogs"
                className={({ isActive }) => (isActive ? "active" : "nav-link")}
              >
                Blogs
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contactus"
                className={({ isActive }) => (isActive ? "active" : "nav-link")}
              >
                Contact Us
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/signin"
                className={({ isActive }) => (isActive ? "active" : "nav-link")}
              >
                Sing In
              </Nav.Link>
              {user ? (
                <Nav.Link onClick={handleSignOut}>Sing Out</Nav.Link>
              ) : (
                <Nav.Link
                  as={NavLink}
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                >
                  Sing Up
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
