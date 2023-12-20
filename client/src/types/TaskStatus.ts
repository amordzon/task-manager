import { Task } from "./Task";

export type TaskStatus = {
  TODO: Task[];
  INPROGRESS: Task[];
  TESTING: Task[];
  COMPLETED: Task[];
};
