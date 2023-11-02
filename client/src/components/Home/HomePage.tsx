import React from "react";
import NavbarPage from "./NavbarPage";
import "../../styles/HomePage.css";
import { Container, Row, Col, Button } from "react-bootstrap";
const HomePage = () => {
  return (
    <div>
      <NavbarPage />
      <Container
        fluid
        className="d-flex align-items-center justify-content-center __jumbotron"
      >
        <Row>
          <Col className="text-center">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <Button variant="light" size="lg" href="#">
              Learn more
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
