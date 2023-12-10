import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../../api";
import { useKeycloak } from "@react-keycloak/web";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    reset,
    formState: { errors },
  } = useForm<FormProjectData>({
    defaultValues: { name: "", description: "", users: [{ email: "" }] },
    resolver: yupResolver(projectSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "users",
  });

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

  const { keycloak } = useKeycloak();

  const onSubmit = handleSubmit(async (data) => {
    const userEmails = data.users?.reduce((prev, curr) => {
      if (curr.email && curr.email !== "") {
        return [...prev, curr.email];
      } else {
        return prev;
      }
    }, [] as string[]);

    console.log(userEmails);

    await api
      .post(
        "/groups",
        {
          name: data.name,
          description: data.description,
        },
        {
          headers: {
            Authorization: `Bearer ${keycloak.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        reset();
        toast.success("New project created sucessfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        handleCloseProjectForm();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  });

  return (
    <>
      <ToastContainer />
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
