import React from "react";
import Sidebar from "../Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <Container className="min-vh-100" fluid>
      <Row>
        <Sidebar />
        <Col>aaa</Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
