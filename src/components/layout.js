import React from "react";

import nogdImage from "../images/nogd.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import nogd4Image from "../images/nogd4.jpg"; 

import { Link, useStaticQuery, graphql } from 'gatsby'


import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";

export default function Layout({ children, pageTitle }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container
      style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}
      fluid
      as="body"
    >
      <title>{data.site.siteMetadata.title}</title>      
      <Container fluid as={"header"}>
        <Navbar sticky="top" expand="lg">
          <Navbar.Brand className="justify-content-start" href="/">
            <Image src={nogdImage} height={75} fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=2N3TJ3FLJ7LDE">Donate</Nav.Link>
              <Nav.Link target="_blank" href="https://docs.google.com/document/d/1a5bUupU_ql1GKaAYlHxwL3R_xWJ0evT3hSJm2_he0z4/edit?usp=sharing">Code of Conduct</Nav.Link>
              <Nav.Link target="_blank" href="mailto:contact@neworleansgamedev.com">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
        <div className="banner-container">
        <h1 className="header">{data.site.siteMetadata.title}</h1>

        </div>
    
      <Container as={"main"}>{children}</Container>
      <Container fluid as={"footer"}>
        Footer
      </Container>
    </Container>
  );

  /*
    TODO: Restore event pages

    <NavDropdown title="Events" id="basic-nav-dropdown">
                <NavDropdown.Item href="/show-n-tell">
                  Show N Tell
                </NavDropdown.Item>
                <NavDropdown.Item href="/thursday">
                  Third Thursday Series
                </NavDropdown.Item>
                <NavDropdown.Item href="/game-jams">Game Jams</NavDropdown.Item>
              </NavDropdown>


    TODO: Fix Contact Page

              <Nav.Link href="/contact">Contact</Nav.Link>

  **/
}
