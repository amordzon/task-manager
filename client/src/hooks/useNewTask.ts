import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import api from "../api";
import { useDispatch } from "react-redux";
import { addTask } from "../slices/tasksSlice";

type ModalProps = {
  handleCloseNewTaskModal: () => void;
  status: string | null;
};

const useNewTask = ({ handleCloseNewTaskModal, status }: ModalProps) => {
  const taskSchema = yup
    .object({
      title: yup.string().required(),
      description: yup.string(),
      status: yup.mixed().oneOf(["TODO", "INPROGRESS", "TESTING", "COMPLETED"]),
      deadline: yup.string(),
    })
    .required();
  type FormNewTaskData = yup.InferType<typeof taskSchema>;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormNewTaskData>({
    defaultValues: {
      title: "",
      description: "",
      status: "",
      deadline: "",
    },
    resolver: yupResolver(taskSchema),
  });

  useEffect(() => {
    const statusToSet = status ? status : "TODO";
    setValue("status", statusToSet);
  }, [status]);

  const { keycloak } = useKeycloak();
  const { id } = useParams();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await api.post("/tasks/" + id, data, {
        headers: {
          Authorization: `Bearer ${keycloak.token}`,
        },
      });
      console.log(response.data);

      reset();
      toast.success("New Task created successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(addTask(response.data.data));
      handleCloseNewTaskModal();
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
    register,
    onSubmit,
    errors,
  };
};

export default useNewTask;
