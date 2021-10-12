import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar sticky="top" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand className="text-warning fs-4 fw-bold">CAR MECHANICS</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <NavLink className="fs-4 text-muted text-decoration-none ms-3" to="/home#banner">
                Home
              </NavLink>
              <NavLink className="fs-4 text-muted text-decoration-none ms-3" to="/home#services">
                Services
              </NavLink>{" "}
              <NavLink className="fs-4 text-muted text-decoration-none ms-3" to="/home#experts">
                Experts
              </NavLink>
              <NavLink className="fs-4 text-muted text-decoration-none ms-3" to="/login">
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
