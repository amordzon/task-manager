import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import useModal from "../../../hooks/useModal";
import NewProject from "../Projects/NewProject";
import MyProjects from "./MyProjects";
import MyUpcomingTasks from "./MyUpcomingTasks";

const Home = () => {
  const { keycloak } = useKeycloak();
  const { name } = keycloak.idTokenParsed || {};
  const { showModal, handleCloseModal, handleShowModal } = useModal();

  return (
    <>
      <NewProject
        showNewProjectForm={showModal}
        handleCloseProjectForm={handleCloseModal}
      />
      <Container className="mt-4">
        <h2 className="text-center">Hello {name}!</h2>
        <MyProjects handleShowProjectForm={handleShowModal} />

        <Row className="my-4">
          <Col className="mt-2">
            <h3 className="mb-3">Recent Activity</h3>
            <Alert variant="info">You have no recent activity!</Alert>
          </Col>
        </Row>

        <MyUpcomingTasks />
      </Container>
    </>
  );
};

export default Home;
