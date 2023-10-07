import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="border p-2 my-2 h-[160px]">
      <h3 className='font-semibold'>{task.title}</h3>
      <p className='text-[#666666]'>{task.description}</p>
    </div>
  );
};

export default Task;