import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { Button, Card, Container, Row, Col, Alert } from "react-bootstrap";

const Home = () => {
  const { keycloak } = useKeycloak();
  const { name } = keycloak.idTokenParsed || {};

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-2">Hello {name || "Guest"}!</h2>

      <Row className="my-5">
        <Col className="mt-2">
          <h3 className="mb-3">My Projects</h3>
          <Card>
            <Card.Body>
              <Card.Text className="text-center">
                <h5>You currently do not have any projects in TaskManager.</h5>
                Projects allow you to organize tasks efficiently. Start by
                creating a new project to get started with TaskManager and
                explore its features! For instance, you can create projects
                based on different categories, teams, or even specific tasks.
                Once created, you can add tasks, assign them, set deadlines, and
                track progress within each project.
              </Card.Text>
              <div className="text-center">
                <Button variant="success">Create Project</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-4">
        <Col className="mt-2">
          <h3 className="mb-3">Recent Activity</h3>
          <Alert variant="info">You have no recent activity!</Alert>
        </Col>
      </Row>

      <Row className="my-4">
        <Col className="mt-2">
          <h3 className="mb-3">My Upcoming Tasks</h3>
          <Alert variant="warning">
            You have no upcoming tasks assigned to you
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
