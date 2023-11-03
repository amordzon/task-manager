import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const LaptopSection = () => {
  return (
    <Container className="p-5 my-5">
      <Row>
        <Col md={8}>
          <img
            src="https://www.freeiconspng.com/thumbs/laptop-png/mac-laptop-png-13.png"
            width={600}
            height={400}
          />
        </Col>
        <Col md={4} className="text-left d-flex align-items-center">
          <div>
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              sint error dolorem, eaque neque saepe perspiciatis modi voluptatum
              nam vero, minima.
            </p>
            <p>
              Neque saepe perspiciatis modi voluptatum nam vero, minima, beatae
              nihil labore placeat. Molestias explicabo ad asperiores tenetur.
            </p>
            <p>
              Neque saepe perspiciatis modi voluptatum nam vero, minima, beatae
              nihil labore placeat. Molestias explicabo ad asperiores tenetur.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LaptopSection;
