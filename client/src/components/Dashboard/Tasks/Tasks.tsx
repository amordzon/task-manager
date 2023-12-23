import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import useModal from "../../../hooks/useModal";
import { Task } from "../../../types/Task";
import { TaskStatus } from "../../../types/TaskStatus";
import TaskView from "./TaskView";

type TasksProps = {
  tasksByStatus: TaskStatus;
  status: string;
};

const Tasks = ({ tasksByStatus, status }: TasksProps) => {
  const [tasks, setTasks] = useState<TaskStatus>(tasksByStatus);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const { showModal, handleCloseModal, handleShowModal } = useModal();

  const removeTask = (taskStat: keyof TaskStatus, id: string) => {
    const removedTask = tasks[taskStat].filter((task) => {
      return task.id !== id;
    });
    const newTasks: TaskStatus = {
      ...tasks,
      [taskStat]: removedTask,
    };
    setTasks(newTasks);
  };

  useEffect(() => {
    setTasks(tasksByStatus);
  }, [tasksByStatus]);
  return (
    <>
      {selectedTask && (
        <TaskView
          showTaskModal={showModal}
          handleCloseTaskModal={handleCloseModal}
          selectedTask={selectedTask}
          removeTask={removeTask}
        />
      )}
      {tasks &&
        tasks[status as keyof typeof tasksByStatus].map((task, index) => (
          <Card className="mb-3 __task-card" key={index}>
            <Card.Body
              onClick={() => {
                setSelectedTask(task);
                handleShowModal();
              }}
            >
              <div>
                <Card.Title className="__task-title">{task.title}</Card.Title>
                <Card.Text className="__task-description">
                  {task.description}
                </Card.Text>
              </div>
              <div className="ml-auto mt-2">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    {task.comments.length > 0 && (
                      <>
                        <FontAwesomeIcon
                          icon={faComment}
                          className="mr-1 __task-comments-icon"
                        />
                        <span className="mx-1">{task.comments.length}</span>
                      </>
                    )}
                  </div>
                  {task.users && task.users?.length > 0 && (
                    <>
                      {task.users.length > 0 &&
                        task.users
                          .slice(0, Math.min(3, task.users.length))
                          .map((user, index) => (
                            <Image
                              key={index}
                              src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
                              roundedCircle
                              style={{ width: "22px", height: "22px" }}
                            />
                          ))}
                      {task.users.length > 3 && (
                        <div className="__task-badge-users">
                          +{task.users?.length - 3}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default Tasks;
