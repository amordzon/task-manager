import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useKeycloak } from "@react-keycloak/web";
import api from "../../../api";
import { Group } from "../../../types/Group";

type ModalProps = {
  handleShowProjectForm: () => void;
};

const MyProjects = ({ handleShowProjectForm }: ModalProps) => {
  const { keycloak } = useKeycloak();
  const [myGroups, setMyGroups] = useState<Group[] | []>([]);
  const [visibleGroups, setVisibleGroups] = useState<Group[] | []>([]);

  useEffect(() => {
    getMyProjects();
  }, []);

  const getMyProjects = async () => {
    await api
      .get("/groups/my-groups", {
        headers: {
          Authorization: `Bearer ${keycloak.token}`,
        },
      })
      .then((response) => {
        const groups = response.data.data;
        setMyGroups(groups);
        setVisibleGroups(groups.slice(0, Math.min(groups.length, 4)));
        console.log(myGroups);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showGroups = () => {
    myGroups.length == visibleGroups.length
      ? setVisibleGroups(myGroups.slice(0, Math.min(myGroups.length, 4)))
      : setVisibleGroups(myGroups);
  };
  return (
    <Row className={visibleGroups.length > 0 ? "d-flex flex-wrap" : "grid"}>
      <h3>My Projects</h3>
      {visibleGroups.length > 0 ? (
        <>
          {visibleGroups.map((group, index) => (
            <Col key={index} className="mt-2" xs={12} sm={12} md={6}>
              <Card className="__card py-2">
                <Card.Body className="d-flex flex-column text-center">
                  <div>
                    <Card.Title>{group.name}</Card.Title>
                    <Card.Text>{group.description}</Card.Text>
                  </div>
                  <div className="mt-auto">
                    <Button className="__primary-btn">View Project</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <div className="text-end mt-3">
            <Button variant="success" onClick={showGroups}>
              {visibleGroups.length == myGroups.length
                ? "Show less"
                : "Show All"}
            </Button>
          </div>
        </>
      ) : (
        <Col className="mt-2">
          <Card>
            <Card.Body className="text-center">
              <Card.Title>
                You currently do not have any projects in TaskManager.
              </Card.Title>
              <Card.Text>
                Projects allow you to organize tasks efficiently. Start by
                creating a new project to get started with TaskManager and
                explore its features! For instance, you can create projects
                based on different categories, teams, or even specific tasks.
                Once created, you can add tasks, assign them, set deadlines, and
                track progress within each project.
              </Card.Text>
              <div>
                <Button variant="success" onClick={handleShowProjectForm}>
                  Create Project
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  );
};

export default MyProjects;
