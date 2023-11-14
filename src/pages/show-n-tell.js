import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Layout from '../components/layout';
import GoogleMap from '../components/GoogleMap';
import ExampleCalendar from "../components/calendar";
import nogdImage from "../images/nogd5.png";


function ShowNTellPage() {
  return (
    <Container>
      <Row className="my-5">
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h1 className="display-4">Show N Tell</h1>
            <h2>We do these at the Sea Cave Arcade!</h2>
            <p className="lead">
              Welcome to our Show N Tell events! Join us every other Wednesday at the Sea Cave Arcade for exciting presentations and discussions.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <img src={nogdImage} alt="nogd5" style={{ width: "50%" }} />
        </Col>
        <Col md={6}>
          <GoogleMap />
        </Col>
        <Row>
        <ExampleCalendar />
      </Row>
      </Row>
      <Row className="my-5">
        <Col>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe

            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ShowNTellPage;

