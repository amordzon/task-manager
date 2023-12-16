import { User } from "./User";

export type Group = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  users: User[];
};
