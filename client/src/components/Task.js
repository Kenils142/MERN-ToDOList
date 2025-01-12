import React from 'react';

import {FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

function Task({ task, updateTask, deleteTask }) {
  return (
    <li className='task-item'>
      <div className='task-content'>
        <span className='task-title'>{task.title}</span>
        <div className='task-buttons'>
          {!task.completed && (
            <button className='complete' onClick={() => updateTask(task._id, true)}>
              <FaCheckCircle />
            </button>
          )}
          <button className='delete' onClick={() => deleteTask(task._id)}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </li>
  );
}

export default Task;