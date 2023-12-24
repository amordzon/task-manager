import { useKeycloak } from "@react-keycloak/web";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import { setTasks } from "../slices/tasksSlice";
import { Group } from "../types/Group";
import { useDispatch } from "react-redux";

const useProjectDetails = () => {
  const { keycloak } = useKeycloak();
  const [group, setGroup] = useState<Group | null>(null);
  const { id } = useParams();
  const dispatch = useDispatch();

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
        dispatch(setTasks(groupInfo.tasks));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { group };
};

export default useProjectDetails;
