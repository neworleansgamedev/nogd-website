import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">NOGD</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/donate">Donate</Nav.Link>
                <NavDropdown title="Events" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Show N Tell</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Third Thursday Series
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Game Jams
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <main>{children}</main>
    </>
  );
}