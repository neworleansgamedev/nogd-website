import React from 'react';
import { Link } from 'gatsby';
import TitledList from '../components/TitledList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Lists
const list1 = [
  "We are a bunch of game developers in the Greater New Orleans",
  "area who meet on a monthly basis to network, collaborate, and share knowledge."
];

const list2 = [
  "Each month we have a rotation selection of events",
  "that help the gamedev community present on interesting topics, showcase their projects",
  "and encourage game development in the local area."
];

const list3 = [
  "Until further notice we are meeting online on the third Thursday of every month at 7:00 pm.",
  "Join our discord for more info or find us on youtube.",
  "We also host an informal Hack Night at 7:00pm every Tuesday."
];

function AboutPage() {
  return (
    <Container>
      <Row>
        <Col>
          <TitledList title="Who?" list={list1} />
        </Col>
        <Col>
          <TitledList title="What?" list={list2} />
        </Col>
        <Col>
          <TitledList title="Where?" list={list3} />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;