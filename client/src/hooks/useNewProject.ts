import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useKeycloak } from "@react-keycloak/web";
import api from "../api";

type ModalProps = {
  handleCloseProjectForm: () => void;
};

const useNewProject = ({ handleCloseProjectForm }: ModalProps) => {
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
    try {
      const userEmails = data.users?.reduce((prev: string[], curr) => {
        if (curr.email && curr.email !== "") {
          return [...prev, curr.email];
        } else {
          return prev;
        }
      }, [] as string[]);

      console.log(userEmails);

      await api.post(
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
      );

      reset();
      toast.success("New project created successfully!", {
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
    } catch (error) {
      console.error(error);
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
    }
  });

  return {
    fields,
    register,
    remove,
    onSubmit,
    errors,
    addEmail,
    controlledFields,
  };
};

export default useNewProject;
