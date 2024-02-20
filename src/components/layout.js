import React from "react";

import nogdImage from "../images/nogd.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import nogd4Image from "../images/nogd4.jpg"; 


import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <Container
      style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}
      fluid
      as="body"
    >
      <Container fluid as={"header"}>
        <Navbar sticky="top" expand="lg">
          <Navbar.Brand className="justify-content-start" href="/">
            <Image src={nogdImage} height={75} fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/donate">Donate</Nav.Link>
              <NavDropdown title="Events" id="basic-nav-dropdown">
                <NavDropdown.Item href="/show-n-tell">
                  Show N Tell
                </NavDropdown.Item>
                <NavDropdown.Item href="/thursday">
                  Third Thursday Series
                </NavDropdown.Item>
                <NavDropdown.Item href="/game-jams">Game Jams</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
        <div className="banner-container">
        </div>
    
      <Container as={"main"}>{children}</Container>
      <Container fluid as={"footer"}>
        Footer
      </Container>
    </Container>
  );
}
