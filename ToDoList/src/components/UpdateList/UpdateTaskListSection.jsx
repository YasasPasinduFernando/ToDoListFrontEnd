import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const UpdateTaskListSection = () => {
  const [data, setData] = useState([]);
  const [updateTaskId, setUpdateTaskId] = useState('');
  const [updateTask, setUpdateTask] = useState('');
  const [updatePriority, setUpdatePriority] = useState('');
  const [updateStatus, setUpdateStatus] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/Home/get');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:8081/Home/${taskId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        
        const updatedData = data.filter((item) => item.taskId !== taskId);
        setData(updatedData);
        console.log(`Task with ID ${taskId} deleted successfully.`);
      } else {
        console.error(`Error deleting task with ID ${taskId}.`);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8081/Home/${updateTaskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          task: updateTask,
          priority: updatePriority,
          status: updateStatus,
        }),
      });

      if (response.ok) {
        
        const updatedData = data.map((item) =>
          item.taskId === updateTaskId
            ? { ...item, task: updateTask, priority: updatePriority, status: updateStatus }
            : item
        );

        setData(updatedData);
        console.log(`Task with ID ${updateTaskId} updated successfully.`);
       
        setUpdateTaskId('');
        setUpdateTask('');
        setUpdatePriority('');
        setUpdateStatus('');
      } else {
        console.error(`Error updating task with ID ${updateTaskId}.`);
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <>
      <h1 style={{ color: 'red' }}>Update Task List</h1>
      <div className="container mt-7">
        
        <div className="mb-3">
          <label htmlFor="updateTaskId" className="form-label">
            Update Task ID:
          </label>
          <input
            type="number"
            id="updateTaskId"
            name="updateTaskId"
            value={updateTaskId}
            onChange={(e) => setUpdateTaskId(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="updateTask" className="form-label">
            Updated Task:
          </label>
          <input
            type="text"
            id="updateTask"
            name="updateTask"
            value={updateTask}
            onChange={(e) => setUpdateTask(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="updatePriority" className="form-label">
            Updated Priority:
          </label>
          <input
            type="text"
            id="updatePriority"
            name="updatePriority"
            value={updatePriority}
            onChange={(e) => setUpdatePriority(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="updateStatus" className="form-label">
            Updated Status:
          </label>
          <input
            type="text"
            id="updateStatus"
            name="updateStatus"
            value={updateStatus}
            onChange={(e) => setUpdateStatus(e.target.value)}
            className="form-control"
            required
          />
        </div>
       
        <button type="button" onClick={handleUpdate} className="btn btn-success me-2">
          Update Task
        </button>
        <hr />

        
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th className="bg-light text-dark">Task ID</th>
              <th className="bg-light text-dark">Task</th>
              <th className="bg-light text-dark">Priority</th>
              <th className="bg-light text-dark">Status</th>
              <th className="bg-light text-dark">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.taskId}>
                <td className="bg-light text-dark">{item.taskId}</td>
                <td className="bg-light text-dark">{item.task}</td>
                <td className="bg-light text-dark">{item.priority}</td>
                <td className="bg-light text-dark">{item.status}</td>
                <td className="bg-light text-dark">
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => handleDelete(item.taskId)}
                  >
                    <i className="bi bi-trash"></i> Delete
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      setUpdateTaskId(item.taskId);
                      setUpdateTask(item.task);
                      setUpdatePriority(item.priority);
                      setUpdateStatus(item.status);
                    }}
                  >
                    <i className="bi bi-pencil"></i> Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UpdateTaskListSection;
