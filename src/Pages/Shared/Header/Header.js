import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
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
              {user?.email ? (
                <NavLink to="/login">
                  <Button onClick={logOut} className="ms-3 btn btn-danger">
                    {" "}
                    Logout
                  </Button>
                </NavLink>
              ) : (
                <NavLink to="/login">
                  {" "}
                  <Button className="ms-3 btn btn-danger"> Login</Button>
                </NavLink>
              )}
              <NavLink className="fs-4 text-muted text-decoration-none ms-3" to="/login">
                {user?.displayName && <img style={{ width: "40px", borderRadius: "50%" }} src={user?.photoURL} alt="" />}
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
