import { useKeycloak } from "@react-keycloak/web";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import { Group } from "../types/Group";
import { Task } from "../types/Task";
import { TaskStatus } from "../types/TaskStatus";

const useProjectDetails = () => {
  const { keycloak } = useKeycloak();
  const [group, setGroup] = useState<Group | null>(null);
  const { id } = useParams();
  const [tasksByStatus, setTasksByStatus] = useState<TaskStatus>({
    TODO: [],
    INPROGRESS: [],
    TESTING: [],
    COMPLETED: [],
  });

  useEffect(() => {
    getGroupDetails();
  }, [id]);

  const getGroupDetails = async () => {
    await api
      .get("/groups/group/" + id, {
        headers: {
          Authorization: `Bearer ${keycloak.token}`,
        },
      })
      .then((response) => {
        const groupInfo = response.data.data;
        setGroup(groupInfo);
        reduceTasks(groupInfo.tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reduceTasks = (tasks: Task[]) => {
    const result: TaskStatus = {
      TODO: [],
      INPROGRESS: [],
      TESTING: [],
      COMPLETED: [],
    };

    tasks.forEach((task) => {
      switch (task.status) {
        case "TODO":
          result.TODO.push(task);
          break;
        case "INPROGRESS":
          result.INPROGRESS.push(task);
          break;
        case "TESTING":
          result.TESTING.push(task);
          break;
        case "COMPLETED":
          result.COMPLETED.push(task);
          break;
        default:
          break;
      }
    });
    setTasksByStatus(result);
  };
  return { tasksByStatus, group };
};

export default useProjectDetails;
