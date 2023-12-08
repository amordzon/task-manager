import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

type ModalProps = {
  showNewProjectForm: boolean;
  handleCloseProjectForm: () => void;
};

const NewProject = ({
  showNewProjectForm,
  handleCloseProjectForm,
}: ModalProps) => {
  return (
    <>
      <Modal
        size="lg"
        centered
        show={showNewProjectForm}
        onHide={handleCloseProjectForm}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseProjectForm}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseProjectForm}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewProject;
