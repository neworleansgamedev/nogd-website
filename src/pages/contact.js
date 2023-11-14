//Gerardo Colon
//NOGD internship
//Contact page
//Last edited: 9/20/2023

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactPage = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h2>Contact Information</h2>
          <Row className="mt-3">
            <Col>
              <a href="/">Homepage</a>
            </Col>
            <Col>
              <a href="https://www.instagram.com/neworleansgamedev/">Instagram</a>
            </Col>
            <Col>
              <a href="https://twitter.com/NOLA_GameDev/">Twitter</a>
            </Col>
            <Col>
              <a href="https://docs.google.com/spreadsheets/d/1DJ4_UTCkRUkWNuzlNBIUBm2TWThy6d8yzCglqZYYEps/edit?usp=sharing">Super Cool Doc</a>
            </Col>
            <Col>
              <a href="https://www.paypal.com/donate/?hosted_button_id=2N3TJ3FLJ7LDE" target="_blank" rel="noopener noreferrer">Donate</a>
            </Col>
            <Col>
              <a href="https://docs.google.com/document/d/1a5bUupU_ql1GKaAYlHxwL3R_xWJ0evT3hSJm2_he0z4/edit" target="_blank" rel="noopener noreferrer">Code Of Conduct</a>
            </Col>
            <Col>
              <a href="https://discord.com/invite/JBt6geQ" target="_blank" rel="noopener noreferrer">Discord</a>
            </Col>
            <Col>
              <a href="mailto:contact@neworleansgamedev.com">Contact Us!</a>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <p>Email: contact@neworleansgamedev.com</p>
              <p>(504) 662-1926</p>
              <p>3000 St Claude Ave, New Orleans, LA 70117</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="contact-form">
            <h2>Send us a message</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
      </Row>
    </Container>
  );
};

export default ContactPage;
