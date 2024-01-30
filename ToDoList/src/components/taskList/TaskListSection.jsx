import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TaskListSection = () => {
  const [data, setData] = useState([]);

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
        // Update the state after successful deletion
        const updatedData = data.filter(item => item.taskId !== taskId);
        setData(updatedData);
        console.log(`Task with ID ${taskId} deleted successfully.`);
      } else {
        console.error(`Error deleting task with ID ${taskId}.`);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <>
      <h1 className="mb-4 text-center text-primary">Task List</h1>
      <div className="container mt-5">
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
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.taskId)}
                  >
                    <i className="bi bi-trash"></i> Delete
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

export default TaskListSection;
