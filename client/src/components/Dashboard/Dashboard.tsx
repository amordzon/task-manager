import React from "react";
import Sidebar from "../Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/Dashboard.css";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container className="min-vh-100" fluid>
      <Row>
        <Sidebar />
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
