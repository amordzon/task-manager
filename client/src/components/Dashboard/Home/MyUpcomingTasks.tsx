import { useKeycloak } from "@react-keycloak/web";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Row, Image } from "react-bootstrap";
import api from "../../../api";
import { Task } from "../../../types/Task";

const MyUpcomingTasks = () => {
  const { keycloak } = useKeycloak();
  const [myTasks, setMyTasks] = useState<Task[] | []>([]);
  const [visibleTasks, setVisibleTasks] = useState<Task[] | []>([]);

  useEffect(() => {
    getMyUpcomingTasks();
  }, []);

  const getMyUpcomingTasks = async () => {
    await api
      .get("/tasks/my-upcoming-tasks", {
        headers: {
          Authorization: `Bearer ${keycloak.token}`,
        },
      })
      .then((response) => {
        const tasks = response.data.data;
        setMyTasks(tasks);
        setVisibleTasks(tasks.slice(0, Math.min(tasks.length, 4)));
        console.log(tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showTasks = () => {
    myTasks.length == visibleTasks.length
      ? setVisibleTasks(myTasks.slice(0, Math.min(myTasks.length, 4)))
      : setVisibleTasks(myTasks);
  };

  return (
    <Row className="my-4">
      <Col className="mt-2">
        <h3 className="mb-3">My Upcoming Tasks</h3>
        {myTasks.length > 0 ? (
          <>
            {visibleTasks.map((task, index) => (
              <Col key={index} className="mt-2" xs={12}>
                <Card className="d-flex flex-wrap flex-row justify-content-between  __mytask">
                  <div>
                    <Card.Body>
                      <p className="mb-1">{task.group.name}</p>
                      <h5>{task.title}</h5>
                      <p>
                        Deadline:{" "}
                        {task.deadline &&
                          moment(task.deadline).format("MMMM Do YYYY, h:mm a")}
                      </p>
                    </Card.Body>
                  </div>
                  <div className="p-md-3 px-3">
                    <Image
                      src="aa.jpg"
                      roundedCircle
                      style={{ width: "30px" }}
                    />
                  </div>
                </Card>
              </Col>
            ))}
            {myTasks.length > 4 && (
              <div className="text-end mt-3">
                <Button variant="success" onClick={showTasks}>
                  {visibleTasks.length == myTasks.length
                    ? "Show less"
                    : "Show all"}
                </Button>
              </div>
            )}
          </>
        ) : (
          <Alert variant="warning">
            You have no upcoming tasks assigned to you
          </Alert>
        )}
      </Col>
    </Row>
  );
};

export default MyUpcomingTasks;
