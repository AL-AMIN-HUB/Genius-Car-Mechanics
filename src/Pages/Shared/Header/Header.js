import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar sticky="top" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className="text-success fs-4 fw-bold">CAR MECHANICS</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link className="fs-4 text-muted" href="#banner">
                Home
              </Nav.Link>
              <Nav.Link className="fs-4 text-muted" href="#services">
                Services
              </Nav.Link>{" "}
              <Nav.Link className="fs-4 text-muted" href="#experts">
                Experts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
