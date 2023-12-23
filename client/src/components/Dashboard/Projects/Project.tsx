import React from "react";
import { faEllipsis, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Row,
  Image,
  Button,
  Col,
  Card,
  Badge,
} from "react-bootstrap";
import useProjectDetails from "../../../hooks/useProjectDetails";
import Tasks from "../Tasks/Tasks";

const Project = () => {
  const { group, tasksByStatus } = useProjectDetails();

  return (
    <>
      <Container className="mt-4">
        <Row className="align-items-center pb-4">
          <Col xs="auto" className="w-50">
            <h2>
              {group?.name}{" "}
              <FontAwesomeIcon className="__ellipsis-icon" icon={faEllipsis} />
            </h2>
            <small className="__small-text">{group?.description}</small>
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <div className="p-md-3 px-3 d-flex align-items-center">
              <div className="d-flex align-items-center">
                {group?.users
                  .slice(0, Math.min(3, group.users.length))
                  .map((user, index) => (
                    <Image
                      key={index}
                      src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
                      roundedCircle
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  ))}
                {group?.users && group?.users.length > 3 && (
                  <div
                    className="__task-badge-users-lg"
                    style={{ width: "30px", height: "30px" }}
                  >
                    +{group.users?.length - 3}
                  </div>
                )}
              </div>

              <Button
                variant="outline-secondary"
                className="rounded-pill mx-2 "
              >
                Invite
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          {Object.keys(tasksByStatus).map((status, index) => (
            <Col key={index}>
              <div className="mb-3 d-flex align-items-center justify-content-between __task-status">
                <h5 className="d-flex align-items-center ">
                  {status}
                  <Badge pill bg="success" className="__task-badge">
                    {tasksByStatus[status as keyof typeof tasksByStatus].length}
                  </Badge>
                </h5>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <Tasks tasksByStatus={tasksByStatus} status={status} />
              <Card className="mb-3 __task-card-new">
                <Card.Body>
                  <Card.Title className="__task-new-title">
                    <FontAwesomeIcon icon={faPlus} /> Add New
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Project;
