import { User } from "./User";

export type Comment = {
  id: string;
  author: User;
  body: string;
  createdAt: string;
  updatedAt: string;
};
