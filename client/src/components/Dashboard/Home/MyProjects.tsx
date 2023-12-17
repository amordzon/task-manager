import React, { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useKeycloak } from "@react-keycloak/web";
import api from "../../../api";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { Group } from "../../../types/Group";
import { setGroups, showGroups } from "../../../slices/myGroupsSlice";

type ModalProps = {
  handleShowProjectForm: () => void;
};

const MyProjects = ({ handleShowProjectForm }: ModalProps) => {
  const { keycloak } = useKeycloak();
  const groups = useSelector((state: RootState) => state.myGroups);
  const dispatch = useDispatch();

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
        const groupsData = response.data.data;
        dispatch(setGroups(groupsData));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showMyGroups = () => {
    dispatch(showGroups());
  };

  return (
    <Row
      className={groups.visibleGroups.length > 0 ? "d-flex flex-wrap" : "grid"}
    >
      <h3>My Projects</h3>
      {groups.visibleGroups.length > 0 ? (
        <>
          {groups.visibleGroups.map((group: Group, index) => (
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
          {groups.myGroups.length > 4 && (
            <div className="text-end mt-3">
              <Button variant="success" onClick={showMyGroups}>
                {groups.visibleGroups.length == groups.myGroups.length
                  ? "Show less"
                  : "Show all"}
              </Button>
            </div>
          )}
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
