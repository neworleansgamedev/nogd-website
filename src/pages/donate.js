import React, { useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState(10);

  const handleDonationChange = (event) => {
    const newAmount = parseFloat(event.target.value);
    if (!isNaN(newAmount)) {
      setDonationAmount(newAmount);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for your donation of $${donationAmount}!`);
  };

  const paypalDonationLink =
    "https://www.paypal.com/donate/?hosted_button_id=2N3TJ3FLJ7LDE";

  return (
    <Container>
      <div className="donate-container">
        <p>Your support is greatly appreciated!</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="donationAmount">
            <Form.Label>Enter donation amount:</Form.Label>
            <Form.Control
              type="number"
              value={donationAmount}
              onChange={handleDonationChange}
              min="1"
              step="1"
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Donate
          </Button>
        </Form>
        <p>Or choose from the following donation:</p>
        <ListGroup horizontal>
          <ListGroup.Item>
            $10{" "}
            <Button variant="primary" onClick={() => setDonationAmount(10)}>
              Donate
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            $25{" "}
            <Button variant="primary" onClick={() => setDonationAmount(25)}>
              Donate
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            $50{" "}
            <Button variant="primary" onClick={() => setDonationAmount(50)}>
              Donate
            </Button>
          </ListGroup.Item>
        </ListGroup>
        <a
          href={paypalDonationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="paypal-link"
        >
          Donate via PayPal
        </a>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(donationAmount / 100) * 100}%` }}
          ></div>
        </div>

        <p>Give people a place to donate money to us.</p>
        <p>Let people tell us they have the hardware to donate so we can coordinate with them to get it.</p>
        <p>Describe why we want donations:</p>
        <p>We rely on the generous contributions of individuals like you to continue our work. Your donations help us to maintain and improve our programs, acquire necessary hardware and equipment, and expand our reach to more communities. With your support, we can make a meaningful difference in the lives of many people and continue to foster a supportive and innovative tech community.</p>
      </div>
    </Container>
  );
};

export default DonatePage;
