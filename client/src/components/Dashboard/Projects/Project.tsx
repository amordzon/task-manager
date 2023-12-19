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
          <small>
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
      <Row>
        <Col>
          <div className="border-bottom mb-3 d-flex align-items-center justify-content-between">
            <h5>
              TO DO
              <Badge pill bg="success">
                9
              </Badge>
            </h5>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <Card className="mb-3">
            <Card.Body>
              <div>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example</Card.Text>
              </div>
              <div className="ml-auto mt-2">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <FontAwesomeIcon icon={faComment} className="mr-1" />
                    <span className="mx-2">2</span>
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

          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example</Card.Text>
              <Image
                src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
                roundedCircle
                style={{ width: "30px", height: "30px" }}
              />
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <div className="border-bottom mb-3">
            <h5>
              IN PROGRESS
              <Badge pill bg="success">
                2
              </Badge>
            </h5>
          </div>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example</Card.Text>
              <Image
                src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
                roundedCircle
                style={{ width: "30px", height: "30px" }}
              />
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example</Card.Text>
              <Image
                src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
                roundedCircle
                style={{ width: "30px", height: "30px" }}
              />
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <div className="border-bottom mb-3">
            <h5>
              TESTING
              <Badge pill bg="success">
                4
              </Badge>
            </h5>
          </div>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example</Card.Text>
              <Image
                src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
                roundedCircle
                style={{ width: "30px", height: "30px" }}
              />
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example</Card.Text>
              <Image
                src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
                roundedCircle
                style={{ width: "30px", height: "30px" }}
              />
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <div className="border-bottom mb-3">
            <h5>
              COMPLETED
              <Badge pill bg="success">
                3
              </Badge>
            </h5>
          </div>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example</Card.Text>
              <Image
                src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
                roundedCircle
                style={{ width: "30px", height: "30px" }}
              />
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example</Card.Text>
              <Image
                src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
                roundedCircle
                style={{ width: "30px", height: "30px" }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
