import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/Task";
import { TaskStatus } from "../types/TaskStatus";

export type tasksType = {
  tasks: TaskStatus;
};

const initialState = {
  tasks: {
    TODO: [],
    INPROGRESS: [],
    TESTING: [],
    COMPLETED: [],
  },
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks(state: tasksType, action: PayloadAction<Task[]>) {
      const result: TaskStatus = {
        TODO: [],
        INPROGRESS: [],
        TESTING: [],
        COMPLETED: [],
      };
      action.payload.forEach((task: Task) => {
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
      state.tasks = result;
    },
    removeTask(
      state: tasksType,
      action: PayloadAction<{ taskStat: keyof TaskStatus; id: string }>
    ) {
      const removedTask = state.tasks[action.payload.taskStat].filter(
        (task: Task) => {
          return task.id !== action.payload.id;
        }
      );
      const newTasks: TaskStatus = {
        ...state.tasks,
        [action.payload.taskStat]: removedTask,
      };
      state.tasks = newTasks;
    },

    addTask(state: tasksType, action: PayloadAction<Task>) {
      const result = {
        ...state.tasks,
        [action.payload.status]: [
          ...state.tasks[action.payload.status as keyof typeof state.tasks],
          action.payload,
        ],
      };
      state.tasks = result;
    },
  },
});

export const { setTasks, removeTask, addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
