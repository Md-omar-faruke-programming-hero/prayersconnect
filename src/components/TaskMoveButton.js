import React from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskMoveButton = ({ task }) => {
  const { state, dispatch } = useTaskContext();

  const handleMove = (newStatus) => {
    // Simulate making an API request to update task status on the backend
    // In a real app, I will send an HTTP request to the server
    // and update the task status only after a successful response.
    const updatedTask = { ...task, status: newStatus };
    dispatch({ type: 'MOVE_TASK', payload: updatedTask });
  };

  return (
    <div className="space-x-2">
      <button
        onClick={() => handleMove('todo')}
        className={`px-2 py-1 rounded-lg ${
          task.status === 'todo' ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
        disabled={task.status === 'todo'}
      >
        Todo
      </button>
      <button
        onClick={() => handleMove('in-progress')}
        className={`px-2 py-1 rounded-lg  ${
          task.status === 'in-progress'
            ? 'bg-gray-300'
            : 'bg-yellow-500 hover:bg-yellow-600 text-white'
        }`}
        disabled={task.status === 'in-progress'}
      >
        In Progress
      </button>
      <button
        onClick={() => handleMove('done')}
        className={`px-2 py-1 rounded-lg  ${
          task.status === 'done' ? 'bg-gray-300' : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
        disabled={task.status === 'done'}
      >
        Done
      </button>
    </div>
  );
};

export default TaskMoveButton;