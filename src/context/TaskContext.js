import React, { createContext, useContext, useReducer, useEffect } from "react";

const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

const initialState = {
  tasks: [],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TASKS":
      return { ...state, tasks: action.payload };
    case "MOVE_TASK":
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, status: action.payload.status };
        }
        return task;
      });
      return { ...state, tasks: updatedTasks };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    // Simulate fetching tasks from the server
    const mockTasks = [
      {
        id: 1,
        title: "Task 1",
        description: "Create a new React app and set up the project structure.",
        status: "done",
      },
      {
        id: 2,
        title: "Task 2",
        description: "Set up Tailwind CSS for styling your app.",
        status: "done",
      },
      {
        id: 3,
        title: "Task 3",
        description: "Create a global state management context using Context API.",
        status: "done",
      },
      {
        id: 4,
        title: "Task 4",
        description:
          "Create components for displaying tasks, moving tasks, and the main app layout.",
        status: "done",
      },
      {
        id: 5,
        title: "Task 5",
        description: "Fetch tasks from the server using Axios or the Fetch API when the app loads.",
        status: "done",
      },
      {
        id: 6,
        title: "Task 6",
        description: "Display the fetched tasks in the appropriate tabs (todo, in-progress, done).",
        status: "done",
      },
      {
        id: 7,
        title: "Task 7",
        description: "Implement drag-and-drop functionality for moving tasks between tabs.",
        status: "done",
      },
      {
        id: 8,
        title: "Task 8",
        description:
          "Create buttons or UI elements to move tasks forward or backward between states (todo, in-progress, done).",
        status: "done",
      },
      {
        id: 9,
        title: "Task 9",
        description:
          "Make API requests to update the task status both on the frontend and backend when tasks are moved.",
        status: "done",
      },
      {
        id: 10,
        title: "Task 10",
        description:
          "Handle API responses and errors, providing appropriate user feedback.",
        status: "todo",
      },
      {
        id: 11,
        title: "Task 11",
        description:
          "Implement error handling and display error messages when API requests fail.",
        status: "todo",
      },
      {
        id: 12,
        title: "Task 12",
        description:
          "Add loading indicators or animations while waiting for API responses.",
        status: "todo",
      },
      {
        id: 13,
        title: "Task 13",
        description:
          "Implement task deletion functionality.",
        status: "todo",
      },
      {
        id: 14,
        title: "Task 14",
        description:
          "Add filtering and search functionality for tasks.",
        status: "todo",
      },
      {
        id: 15,
        title: "Task 15",
        description:
          "Implement pagination if the list of tasks becomes large.",
        status: "todo",
      },
      
      {
        id: 16,
        title: "Task 16",
        description:
          "Style the app using Tailwind CSS to make it visually appealing",
        status: "in-progress",
      },
      {
        id: 17,
        title: "Task 17",
        description:
          "Add responsive design to make the app usable on various screen sizes.",
        status: "in-progress",
      },
    ];
    dispatch({ type: "FETCH_TASKS", payload: mockTasks });
  }, []);

  return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>;
};
