import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"
import { CurrentUserContext } from "../App";

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext)
  const loggedInIcons = <>{currentUser?.username}</>
  const loggedOutIcons = (
    <>
      <NavLink to="/signin">
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink to="/signup">
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink to="/">
              <i className="fas fa-home"></i>Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;