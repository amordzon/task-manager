import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Features = () => {
  return (
    <Container className="p-5 __features">
      <Row className="py-5 my-5">
        <Col md={8}>
          <img
            src="https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png"
            width={600}
            height={400}
          />
        </Col>
        <Col md={4} className="text-left d-flex align-items-center">
          <div>
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button className="__features-btn">Sign up for free</Button>
          </div>
        </Col>
      </Row>
      <Row className="py-5 my-5">
        <Col md={4} className="text-right d-flex align-items-center">
          <div>
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button className="__features-btn">Sign up for free</Button>
          </div>
        </Col>

        <Col md={8}>
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_ToDo_960x615_2x_1_RE3HTxG?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain"
            width={600}
            height={400}
          />
        </Col>
      </Row>
      <Row className="py-5 my-5">
        <Col md={8}>
          <img
            src="https://adminlte.io/wp-content/uploads/2022/02/free-admin-panels.png"
            width={600}
            height={400}
          />
        </Col>
        <Col md={4} className="text-left d-flex align-items-center">
          <div>
            <h1>Lorem ipsum</h1>
            <p>Voluptatem nesciunt amet, tempore sapiente ex suscipit.</p>
            <Button className="__features-btn">Sign up for free</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
