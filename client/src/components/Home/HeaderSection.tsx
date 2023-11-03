import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

const HeaderSection = () => {
  return (
    <Container fluid className="__header py-5">
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <FontAwesomeIcon icon={faListCheck} className="__header-icon" />
          <h2 className="mt-3">Lorem ipsum dolorem</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            praesentium quas voluptatum ullam molestiae. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Debitis officiis voluptate.
          </p>
          <a href="#">Join now</a>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderSection;
