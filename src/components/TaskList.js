import React from "react";
import Task from "./Task";
import TaskMoveButton from "./TaskMoveButton";
import { useTaskContext } from "../context/TaskContext";

const TaskList = ({ status }) => {
  const { state } = useTaskContext();

  const filteredTasks = state.tasks.filter((task) => task.status === status);

  return (
    <div className="w-1/3 p-4 border">
      <h2 className="text-xl font-semibold mb-4 ">{status}</h2>
      <div className="space-y-4 ">
        {filteredTasks.map((task) => (
          <div key={task.id}  className="flex flex-col  justify-between ">
            <div>
              <Task task={task} />
            </div>
            <div>
              <TaskMoveButton task={task} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
