import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('High');
  const [status, setStatus] = useState('Done');
  const [alert, setAlert] = useState({ message: '', type: '' });

  const addTask = () => {
    const taskObject = {
      taskId: null, 
      task,
      priority,
      status,
    };

    
    fetch('http://localhost:8081/Home/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskObject),
    })
      .then((response) => response.json())
      .then((data) => {
        setAlert({ message: 'Task added successfully!', type: 'success' });
        console.log('Response from backend:', data);
      })
      .catch((error) => {
        setAlert({ message: 'Error adding task. Please try again.', type: 'danger' });
        console.error('Error sending data to backend:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h1>Add Task</h1>

      {alert.message && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
        </div>
      )}

      <form>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Task:
          </label>
          <input
            type="text"
            id="task"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="priority" className="form-label">
            Priority:
          </label>
          <select
            id="priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="form-select"
            required
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status:
          </label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="form-select"
            required
          >
            <option value="Done">Done</option>
            <option value="In Progress">In Progress</option>
            <option value="Not Started">Not Started</option>
          </select>
        </div>

        <button type="button" onClick={addTask} className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
