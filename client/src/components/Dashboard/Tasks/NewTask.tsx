import {
  faBarsProgress,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import useNewTask from "../../../hooks/useNewTask";

type NewTaskModalProps = {
  showNewTaskModal: boolean;
  handleCloseNewTaskModal: () => void;
  status: string | null;
};

const NewTask = ({
  showNewTaskModal,
  handleCloseNewTaskModal,
  status,
}: NewTaskModalProps) => {
  const { register, onSubmit, errors, reset } = useNewTask({
    handleCloseNewTaskModal,
    status,
  });
  return (
    <>
      <Modal
        size="lg"
        centered
        show={showNewTaskModal}
        onHide={() => {
          handleCloseNewTaskModal();
          reset();
        }}
      >
        <Modal.Header>
          <Modal.Title>
            <FontAwesomeIcon icon={faBarsProgress} /> New Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add title"
                  {...register("title")}
                />
                <p>{errors.title?.message}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Add description"
                  {...register("description")}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Select {...register("status")} value="INPROGRESS">
                  <option value="TODO">TODO</option>
                  <option value="INPROGRESS">IN PROGRESS</option>
                  <option value="TESTING">TESTING</option>
                  <option value="COMPLETED">COMPLETED</option>
                </Form.Select>
                <p>{errors.status?.message}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="deadline">
                <Form.Label>Deadline</Form.Label>
                <Form.Control type="datetime-local" {...register("deadline")} />
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
              <Button
                variant="secondary"
                onClick={() => {
                  handleCloseNewTaskModal();
                  reset();
                }}
              >
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
