import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/tasks');
      setTasks(res.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const addTask = async () => {
    if (!newTask) return;
    try {
      await axios.post('http://localhost:5000/tasks', { title: newTask });
      setNewTask('');
      fetchTasks();
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  const updateTask = async (id, completed) => {
    try {
      await axios.put(`http://localhost:5000/tasks/${id}`, { completed });
      fetchTasks();
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div className='main-container'>
      <h1>MERN - TO DO LIST</h1>

      <div className='add-task-section'>
        <input
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Add new task'
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className='filter-buttons'>
        <button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          All Tasks
        </button>
        <button onClick={() => setFilter('pending')}
          className={filter === 'pending' ? 'active' : ''}
        >
          To Be Completed
        </button>
        <button 
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
        >
          Completed
        </button>
      </div>

      <TaskList
        tasks={tasks}
        filter={filter}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;