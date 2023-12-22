import {
  faBarsProgress,
  faCirclePlus,
  faComments,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Modal, Row, Image, Form } from "react-bootstrap";
import "../../../styles/Task.css";

type ModalProps = {
  showTaskModal: boolean;
  handleCloseTaskModal: () => void;
};

/* eslint-disable */
const Task = ({ showTaskModal, handleCloseTaskModal }: ModalProps) => {
  return (
    <>
      <Modal
        size="lg"
        centered
        show={showTaskModal}
        onHide={handleCloseTaskModal}
        className="__task-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon={faBarsProgress} /> Plan marketing campaign
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row xs={1} md={4} className="g-5 text-center">
              <Col>
                <div>
                  <div className="__task-attribute">STATUS</div>
                  <div className="d-flex justify-content-center">
                    <select className="form-select">
                      <option selected>TODO</option>
                      <option value="1">IN PROGRESS</option>
                      <option value="2">TESTING</option>
                      <option value="3">COMPLETED</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <div className="__task-attribute">USERS</div>
                  <div className="d-flex justify-content-center gap-1">
                    <Image
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                      roundedCircle
                      style={{ width: "25px", height: "25px" }}
                    />
                    <FontAwesomeIcon
                      icon={faCirclePlus}
                      style={{ width: "25px", height: "25px" }}
                    />
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <div className="__task-attribute">AUTHOR</div>
                  <div>
                    <Image
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                      roundedCircle
                      style={{ width: "25px", height: "25px" }}
                    />
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <div>
                    <div className="__task-attribute">DEADLINE</div>
                    <div>Sept. 21 2024</div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <div>
                  <div className="__task-label">
                    <FontAwesomeIcon icon={faFileLines} /> Description
                  </div>
                  <div className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    vitae tempora esse inventore sunt perspiciatis mollitia
                    aspernatur similique!
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <div>
                  <div className="__task-label mb-3">
                    <FontAwesomeIcon icon={faComments} /> Comments
                  </div>
                  <div className="card-footer py-3 border-0">
                    <div className="d-flex flex-start w-100 mb-3">
                      <Image
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                        alt="avatar"
                        width="40"
                        height="40"
                      />
                      <div className="form-outline w-100">
                        <Form.Control
                          as="textarea"
                          className="form-control"
                          id="textAreaExample"
                          placeholder="Write a comment..."
                          rows={3}
                        />
                      </div>
                    </div>
                    <div className="float-end">
                      <button type="button" className="btn btn-success btn-sm">
                        Post comment
                      </button>
                    </div>
                  </div>

                  <div>
                    <Row className="d-flex pt-3 justify-content-start">
                      <Col className="d-flex">
                        <Image
                          className="rounded-circle shadow-1-strong me-3"
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                          alt="avatar"
                          width="40"
                          height="40"
                        />
                        <div className="flex-grow-1 flex-shrink-1">
                          <div>
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="mb-1">
                                Maria Smantha{" "}
                                <span className="small">- 2 hours ago</span>
                              </p>
                            </div>
                            <p className="small mb-0">
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page.
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Task;
