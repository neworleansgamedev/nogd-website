//Gerardo Colon
//NOGD internship
//Index Page
//Last edited:9/20/2023

//classic imports
import React from "react";
import { Link } from "gatsby";

import { Card, Container, Image, Row, Col } from "react-bootstrap";

import nogdImage from "../images/nogd.png";
import "./index.css";

function IndexPage() {
  return (
    <>
      <Row>
      <Container>
        <h1>New Orleans Game Developers</h1>
      </Container>
      </Row>
      <Row>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <Card.Title>Who?</Card.Title>
                <Card.Text>We are a bunch of game developers in the Greater New Orleans area who meet on a monthly basis to network, collaborate, and share knowledge.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col  lg={4}>
            <Card>
              <Card.Body>
                <Card.Title>What?</Card.Title>
                <Card.Text>Each month we have a rotation selection of events that help the gamedev community present on interesting topics, showcase their projects, and encourage game development in the local area.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <Card.Title>When & Where?</Card.Title>
                <Card.Text>Each month we have a rotation selection of events that help the gamedev community present on interesting topics, showcase their projects, and encourage game development in the local area.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

      </Row>
      <Row>
        <p>Hang out with us</p>
      </Row>
      <Row>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_817psp5emlgh8vgg432udrtv20%40group.calendar.google.com&ctz=America%2FChicago"
          style={{ border: 0, width: "100%", height: "600px" }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </Row>
    </>
  );
}

export default IndexPage;
