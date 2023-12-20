import { Task } from "./Task";
import { User } from "./User";

export type Group = {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
  createdAt: string;
  updatedAt: string;
  users: User[];
};
