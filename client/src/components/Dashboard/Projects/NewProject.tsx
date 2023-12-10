import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type ModalProps = {
  showNewProjectForm: boolean;
  handleCloseProjectForm: () => void;
};

const projectSchema = yup
  .object({
    name: yup.string().required(),
    description: yup.string(),
    users: yup.array().of(
      yup.object().shape({
        email: yup.string().email("Invalid email"),
      })
    ),
  })
  .required();
type FormProjectData = yup.InferType<typeof projectSchema>;

const NewProject = ({
  showNewProjectForm,
  handleCloseProjectForm,
}: ModalProps) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormProjectData>({
    defaultValues: { name: "", description: "", users: [{ email: "" }] },
    resolver: yupResolver(projectSchema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "users",
  });
  const onSubmit = handleSubmit((data) => console.log(data));
  const watchFieldArray = watch("users");
  const controlledFields = watchFieldArray
    ? fields.map((field, index) => ({
        ...field,
        ...(watchFieldArray[index] || {}),
      }))
    : [];

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
              <p>{errors.name?.message}</p>
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
                const userEmailError = errors?.users?.[index]?.email;
                return (
                  <div key={index}>
                    <div className="row mb-2">
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
                          onClick={() => {
                            if (fields.length > 1) {
                              remove(index);
                            }
                          }}
                          className="ms-2"
                        >
                          X
                        </Button>
                      </div>
                    </div>
                    {userEmailError && <p>{userEmailError.message}</p>}
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
