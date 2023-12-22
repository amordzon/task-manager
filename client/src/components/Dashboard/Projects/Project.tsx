import React from "react";
import {
  faComment,
  faEllipsis,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
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
import useModal from "../../../hooks/useModal";
import Task from "../Tasks/Task";

const Project = () => {
  const { group, tasksByStatus } = useProjectDetails();
  const { showModal, handleCloseModal, handleShowModal } = useModal();
  return (
    <>
      <Task showTaskModal={showModal} handleCloseTaskModal={handleCloseModal} />
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
              {tasksByStatus[status as keyof typeof tasksByStatus].map(
                (task, index) => (
                  <Card className="mb-3 __task-card" key={index}>
                    <Card.Body onClick={handleShowModal}>
                      <div>
                        <Card.Title className="__task-title">
                          {task.title}
                        </Card.Title>
                        <Card.Text className="__task-description">
                          {task.description}
                        </Card.Text>
                      </div>
                      <div className="ml-auto mt-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            {task.comments.length > 0 && (
                              <>
                                <FontAwesomeIcon
                                  icon={faComment}
                                  className="mr-1 __task-comments-icon"
                                />
                                <span className="mx-1">
                                  {task.comments.length}
                                </span>
                              </>
                            )}
                          </div>
                          {task.users && task.users?.length > 0 && (
                            <>
                              {task.users.length > 0 &&
                                task.users
                                  .slice(0, Math.min(3, task.users.length))
                                  .map((user, index) => (
                                    <Image
                                      key={index}
                                      src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
                                      roundedCircle
                                      style={{ width: "22px", height: "22px" }}
                                    />
                                  ))}
                              {task.users.length > 3 && (
                                <div className="__task-badge-users">
                                  +{task.users?.length - 3}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                )
              )}
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
