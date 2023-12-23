import {
  faBarsProgress,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

type NewTaskModalProps = {
  showNewTaskModal: boolean;
  handleCloseNewTaskModal: () => void;
};

const NewTask = ({
  showNewTaskModal,
  handleCloseNewTaskModal,
}: NewTaskModalProps) => {
  return (
    <>
      <Modal
        size="lg"
        centered
        show={showNewTaskModal}
        onHide={handleCloseNewTaskModal}
      >
        <Modal.Header>
          <Modal.Title>
            <FontAwesomeIcon icon={faBarsProgress} /> New Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Add title" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Add description"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Select>
                  <option value="TODO">TODO</option>
                  <option value="INPROGRESS">IN PROGRESS</option>
                  <option value="TESTING">TESTING</option>
                  <option value="COMPLETED">COMPLETED</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="deadline">
                <Form.Label>Deadline</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="users">
                <Form.Label>Users</Form.Label>
                <div>
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    style={{ width: "25px", height: "25px" }}
                    title="Add User"
                  />
                </div>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" type="submit">
                Save
              </Button>
              <Button variant="secondary" onClick={handleCloseNewTaskModal}>
                Cancel
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewTask;
