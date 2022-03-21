import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      id="navbar"
      variant="light"
      collapseOnSelect={true}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link" eventKey={1}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className="nav-link"
              eventKey={2}
            >
              Services
            </Nav.Link>
            <a
              href="https://squareup.com/appointments/book/gxd09rijt4yp45/LZ3VPZE7B8S8R/start"
              className="nav-link"
              eventKey={3}
            >
              Appointments
            </a>
            <Nav.Link as={Link} to="/gallery" className="nav-link" eventKey={4}>
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link" eventKey={5}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
