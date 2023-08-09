import React, { useState } from 'react';
import './App.css';

function App() {
  // Define the state variables
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to add a new task
  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Math.random().toString(),
        title: inputValue.trim(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  // Function to mark a task as completed or incomplete
  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to remove a task
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1 className="app-title">To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Enter task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      {tasks.length === 0 ? (
        <p className="empty-message">No tasks to show</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task-item ${task.completed ? 'completed' : ''}`}
            >
              <span
                className="task-title"
                onClick={() => completeTask(task.id)}
              >
                {task.title}
              </span>
              <button
                className="remove-button"
                onClick={() => removeTask(task.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
