import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import jamImage from "../images/nogd3.jpg"; 

function JamPage() {
  return (
    <Container>
      <Row>
        <Col>
          <section className="mt-4 text-center">
            <h1>Welcome to the Game Jam Page</h1>
            <p>
              Join us for our exciting game jam events! Work with fellow game developers and enthusiasts to create amazing games.
            </p>
          </section>
        </Col>
      </Row>

      <Row>
        <Col>
          <section className="mt-4 text-center">
            <h2>Get Involved</h2>
            <p>
              Whether you're a seasoned developer or just starting, there's a place for you in our community. Join us to learn, grow, and have fun!
            </p>
          </section>
        </Col>
      </Row>

      <Row>
        <Col>
          <section className="mt-4 text-center">
            <h2>Contact Us</h2>
            <p>
              Do you have any questions or ideas for collaboration? Reach out to us today! <Link to="/contact">Contact us here</Link>.
            </p>
          </section>
        </Col>
      </Row>

      <Row>
        <Col>
          <section className="mt-4 text-center">
            <img src={jamImage} alt="Game Jam Image" style={{ maxWidth: '75%', height: 'auto' }} />
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default JamPage;

