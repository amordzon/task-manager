import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

const HeaderSection = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center __header"
    >
      <div className="text-center">
        <FontAwesomeIcon icon={faListCheck} className="__header-icon" />
        <h2 className="mt-3">Lorem ipsum dolorem</h2>
        <p className="px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          praesentium quas voluptatum ullam molestiae. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Debitis officiis voluptate.
        </p>
        <a href="#">Join now</a>
      </div>
    </Container>
  );
};

export default HeaderSection;
