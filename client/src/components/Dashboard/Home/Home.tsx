import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import useModal from "../../../hooks/useModal";
import NewProject from "../Projects/NewProject";
import MyProjects from "./MyProjects";

const Home = () => {
  const { keycloak } = useKeycloak();
  const { name } = keycloak.idTokenParsed || {};
  const { handleShowProjectForm, showNewProjectForm, handleCloseProjectForm } =
    useModal();

  return (
    <>
      <NewProject
        showNewProjectForm={showNewProjectForm}
        handleCloseProjectForm={handleCloseProjectForm}
      />
      <Container className="mt-4">
        <h2 className="text-center">Hello {name}!</h2>
        <MyProjects handleShowProjectForm={handleShowProjectForm} />

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
    </>
  );
};

export default Home;
