import { Group } from "./Group";
import { User } from "./User";

export type Task = {
  id: string;
  title: string;
  description: string;
  users: User[] | null;
  author: User | null; //TODO: CHANGE THIS
  status: "TODO" | "INPROGRESS" | "TESTING" | "COMPLETED";
  comments: Comment[];
  group: Group;
  deadline: string;
  createdAt: string;
  updatedAt: string;
};
