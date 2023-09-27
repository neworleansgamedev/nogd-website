import React from "react";

import nogdImage from "../images/nogd.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout({ children }) {
    return (
        <>
            <Container fluid as={'header'}>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container as={'nav'}>
                        <Navbar.Brand href="/">
                            <img
                                src={nogdImage}
                                height={75}
                                fluid
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                                <Nav.Link href="/about">About Us</Nav.Link>
                                <Nav.Link href="/donate">Donate</Nav.Link>
                                <NavDropdown title="Events" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/show-n-tell">
                                    Show N Tell
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/meetup">
                                    Third Thursday Series
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/game-jams">
                                    Game Jams
                                </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
            <Container as={'main'}>
                {children}
            </Container>
            <Container fluid as={'footer'}>
                Footer
            </Container>
        </>
    );
}
