import React from "react";
import { BallTriangle } from "react-loader-spinner";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Loading = () => {
  return (
    <Container className="vh-100">
      <Row className="vh-100 align-items-center">
        <BallTriangle
          height={120}
          width={120}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass="justify-content-center align-items-center"
          visible={true}
        />
      </Row>
    </Container>
  );
};

export default Loading;
