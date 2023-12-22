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
import { Task } from "../../../types/Task";
import moment from "moment";
import { Comment } from "../../../types/Comment";

type ModalProps = {
  showTaskModal: boolean;
  handleCloseTaskModal: () => void;
  selectedTask: Task;
};

const TaskView = ({
  showTaskModal,
  handleCloseTaskModal,
  selectedTask,
}: ModalProps) => {
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
            <FontAwesomeIcon icon={faBarsProgress} /> {selectedTask?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row xs={1} md={4} className="g-5 text-center">
              <Col>
                <div>
                  <div className="__task-attribute">STATUS</div>
                  <div className="d-flex justify-content-center">
                    <select
                      className="form-select"
                      value={selectedTask ? selectedTask.status : "TODO"}
                    >
                      <option value="TODO">TODO</option>
                      <option value="INPROGRESS">IN PROGRESS</option>
                      <option value="TESTING">TESTING</option>
                      <option value="COMPLETED">COMPLETED</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <div className="__task-attribute">USERS</div>
                  <div className="d-flex justify-content-center gap-1">
                    {selectedTask.users &&
                      selectedTask.users
                        .slice(0, Math.min(3, selectedTask.users.length))
                        .map((user, index) => (
                          <Image
                            key={index}
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                            roundedCircle
                            style={{ width: "25px", height: "25px" }}
                            title={user.firstName + " " + user.lastName}
                          />
                        ))}
                    {selectedTask.users && selectedTask.users.length > 3 && (
                      <div
                        className="__task-badge-users-lg"
                        style={{ width: "25px", height: "25px" }}
                      >
                        +{selectedTask.users?.length - 3}
                      </div>
                    )}
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
                      title={
                        selectedTask.author?.firstName +
                        " " +
                        selectedTask.author?.lastName
                      }
                    />
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <div>
                    <div className="__task-attribute">DEADLINE</div>
                    <div>
                      {selectedTask.deadline
                        ? moment(selectedTask.deadline).format(
                            "MMMM Do YYYY, h:mm a"
                          )
                        : "-"}
                    </div>
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
                  <div className="mt-2">{selectedTask.description}</div>
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
                    {selectedTask.comments.map((comment: Comment, index) => (
                      <Row
                        className="d-flex pt-3 justify-content-start"
                        key={index}
                      >
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
                                  {comment.author.firstName +
                                    " " +
                                    comment.author.lastName}{" "}
                                  <span className="small">
                                    -{" "}
                                    {moment(comment.createdAt).format(
                                      "MMMM Do YYYY, h:mm a"
                                    )}
                                  </span>
                                </p>
                              </div>
                              <p className="small mb-0">{comment.body}</p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    ))}
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

export default TaskView;
