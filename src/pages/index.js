import React from "react";
import Layout from "../components/layout";
import ExampleCalendar from "../components/calendar";
import { Link } from "gatsby";
import { Card, Container, Row, Col } from "react-bootstrap";
import nogdImage from "../images/nogd.png";
import nogd4Image from "../images/nogd4.jpg"; 
import "./index.css";

function IndexPage() {
  return (
      <Container pageTitle="New Orleans Game Developers">

      <Row>
        <Container>
        </Container>
      </Row>
      <Row>
        <Col xs={4} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Who?</Card.Title>
              <Card.Text>
                We are a bunch of game developers in the Greater New Orleans
                area who meet on a monthly basis to network, collaborate, and
                share knowledge.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>What?</Card.Title>
              <Card.Text>
                Each month we have a rotation selection of events that help the
                gamedev community present on interesting topics, showcase their
                projects, and encourage game development in the local area.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>When & Where?</Card.Title>
              <Card.Text>
                Each month we have a rotation selection of events that help the
                gamedev community present on interesting topics, showcase their
                projects, and encourage game development in the local area.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      </Row>
      <Row>
      </Row>
      <Row>
        <ExampleCalendar />
      </Row>
      </Container>

  );
}

export default IndexPage;

