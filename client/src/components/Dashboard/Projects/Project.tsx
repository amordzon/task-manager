import {
  faComment,
  faEllipsis,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Container,
  Row,
  Image,
  Button,
  Col,
  Card,
  Badge,
} from "react-bootstrap";

const Project = () => {
  return (
    <Container className="mt-4">
      <Row className="align-items-center pb-4">
        <Col xs="auto" className="w-50">
          <h2>
            Project Name{" "}
            <FontAwesomeIcon className="__ellipsis-icon" icon={faEllipsis} />
          </h2>
          <small className="__small-text">
            Description of the project Description of the projectDescription of
            the project Description of the project Description of the project
            Description of the project
          </small>
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <div className="p-md-3 px-3">
            <Image
              src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
              roundedCircle
              style={{ width: "30px", height: "30px" }}
              className="mx-1"
            />
            <Image
              src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
              roundedCircle
              style={{ width: "30px", height: "30px" }}
            />
            <Image
              src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
              roundedCircle
              style={{ width: "30px", height: "30px" }}
              className="mx-1"
            />
            <Button variant="outline-secondary" className="rounded-pill mx-2">
              Invite
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <div className="mb-3 d-flex align-items-center justify-content-between __task-status">
            <h5 className="d-flex align-items-center ">
              TO DO
              <Badge pill bg="success" className="__task-badge">
                9
              </Badge>
            </h5>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <Card className="mb-3 __task-card">
            <Card.Body>
              <div>
                <Card.Title className="__task-title">Card Title</Card.Title>
                <Card.Text className="__task-description">
                  Some quick example of really good description
                </Card.Text>
              </div>
              <div className="ml-auto mt-2">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <FontAwesomeIcon
                      icon={faComment}
                      className="mr-1 __task-comments-icon"
                    />
                    <span className="mx-1">2</span>
                  </div>
                  <Image
                    src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
                    roundedCircle
                    style={{ width: "22px", height: "22px" }}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-3 __task-card">
            <Card.Body>
              <div>
                <Card.Title className="__task-title">Card Title</Card.Title>
                <Card.Text className="__task-description">
                  Some quick example of really good description
                </Card.Text>
              </div>
              <div className="ml-auto mt-2">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <FontAwesomeIcon
                      icon={faComment}
                      className="mr-1 __task-comments-icon"
                    />
                    <span className="mx-1">2</span>
                  </div>
                  <Image
                    src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
                    roundedCircle
                    style={{ width: "22px", height: "22px" }}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <div className="mb-3 d-flex align-items-center justify-content-between __task-status">
            <h5 className="d-flex align-items-center ">
              IN PROGRESS
              <Badge pill bg="success" className="__task-badge">
                6
              </Badge>
            </h5>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <Card className="mb-3 __task-card">
            <Card.Body>
              <div>
                <Card.Title className="__task-title">Card Title</Card.Title>
                <Card.Text className="__task-description">
                  Some quick example of really good description
                </Card.Text>
              </div>
              <div className="ml-auto mt-2">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <FontAwesomeIcon
                      icon={faComment}
                      className="mr-1 __task-comments-icon"
                    />
                    <span className="mx-1">2</span>
                  </div>
                  <Image
                    src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
                    roundedCircle
                    style={{ width: "22px", height: "22px" }}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <div className="mb-3 d-flex align-items-center justify-content-between __task-status">
            <h5 className="d-flex align-items-center ">
              TESTING
              <Badge pill bg="success" className="__task-badge">
                2
              </Badge>
            </h5>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <Card className="mb-3 __task-card">
            <Card.Body>
              <div>
                <Card.Title className="__task-title">Card Title</Card.Title>
                <Card.Text className="__task-description">
                  Some quick example of really good description
                </Card.Text>
              </div>
              <div className="ml-auto mt-2">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <FontAwesomeIcon
                      icon={faComment}
                      className="mr-1 __task-comments-icon"
                    />
                    <span className="mx-1">2</span>
                  </div>
                  <Image
                    src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
                    roundedCircle
                    style={{ width: "22px", height: "22px" }}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="mb-3 __task-card">
            <Card.Body>
              <div>
                <Card.Title className="__task-title">Card Title</Card.Title>
                <Card.Text className="__task-description">
                  Some quick example of really good description
                </Card.Text>
              </div>
              <div className="ml-auto mt-2">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <FontAwesomeIcon
                      icon={faComment}
                      className="mr-1 __task-comments-icon"
                    />
                    <span className="mx-1">2</span>
                  </div>
                  <Image
                    src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
                    roundedCircle
                    style={{ width: "22px", height: "22px" }}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <div className="mb-3 d-flex align-items-center justify-content-between __task-status">
            <h5 className="d-flex align-items-center ">
              COMPLETED
              <Badge pill bg="success" className="__task-badge">
                7
              </Badge>
            </h5>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <Card className="mb-3 __task-card">
            <Card.Body>
              <div>
                <Card.Title className="__task-title">Card Title</Card.Title>
                <Card.Text className="__task-description">
                  Some quick example of really good description
                </Card.Text>
              </div>
              <div className="ml-auto mt-2">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <FontAwesomeIcon
                      icon={faComment}
                      className="mr-1 __task-comments-icon"
                    />
                    <span className="mx-1">2</span>
                  </div>
                  <Image
                    src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
                    roundedCircle
                    style={{ width: "22px", height: "22px" }}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
