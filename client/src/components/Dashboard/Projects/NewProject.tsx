import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";

type ModalProps = {
  showNewProjectForm: boolean;
  handleCloseProjectForm: () => void;
};

type FormProjectData = {
  name: string;
  description: string;
  users: { email: string }[];
};

const NewProject = ({
  showNewProjectForm,
  handleCloseProjectForm,
}: ModalProps) => {
  const { register, handleSubmit, control, watch } = useForm<FormProjectData>({
    defaultValues: { name: "", description: "", users: [{ email: "" }] },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "users",
  });
  const onSubmit = handleSubmit((data) => console.log(data));
  const watchFieldArray = watch("users");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  const addEmail = (element: React.KeyboardEvent<HTMLInputElement>) => {
    if (element.key === "Enter") {
      element.preventDefault();
      element.stopPropagation();
      handleSubmit(() => {
        append({ email: "" });
      })();
    }
  };

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
        <Form onSubmit={onSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                {...register("name")}
                type="text"
                placeholder="Project name"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                {...register("description")}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Invite Users</Form.Label>
              {controlledFields.map((field, index) => {
                return (
                  <div key={index} className="row mb-2">
                    <div className="col-9">
                      <Form.Control
                        {...register(`users.${index}.email` as const)}
                        type="email"
                        className="mb-1"
                        placeholder="Enter email"
                        onKeyDown={addEmail}
                      />
                    </div>
                    <div className="col-3">
                      <Button
                        variant="danger"
                        onClick={() => remove(index)}
                        className="ms-2"
                      >
                        X
                      </Button>
                    </div>
                  </div>
                );
              })}
              <Form.Text className="text-muted">
                Enter email address and press enter.
              </Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseProjectForm}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Create
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default NewProject;
