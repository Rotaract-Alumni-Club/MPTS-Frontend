import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../SCSS/ChairStyle/ViewTasks.scss'; // make sure this path is correct

const ViewTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [members, setMembers] = useState([]);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get('/api/tasks/get');
      // if backend sends {data: [...]}, fix accordingly
      const taskData = res.data.data || res.data; 
      setTasks(taskData);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  // Fetch members (you can filter by committee/project later)
  const fetchMembers = async () => {
    try {
      const res = await axios.get('/api/members/get'); // <-- replace with your actual route
      const memberData = res.data.data || res.data;
      setMembers(memberData);
    } catch (err) {
      console.error('Error fetching members:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchMembers();
  }, []);

  // Change assigned members
  const handleMemberChange = async (taskId, e) => {
    const selectedMembers = Array.from(e.target.selectedOptions).map(opt => opt.value);
    try {
      await axios.put(`/api/tasks/updateAssigned/${taskId}`, { AssignedTo: selectedMembers });
      fetchTasks();
    } catch (err) {
      console.error('Error updating assigned members:', err);
    }
  };

  // Delete a task
  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`/api/tasks/delete/${taskId}`);
      fetchTasks();
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div className="view-tasks-container">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div className="task-card" key={task._id}>
            <div className="task-header">
              <h3>{task.TName}</h3>
              <span className={`status-badge ${task.Status?.toLowerCase()}`}>
                {task.Status}
              </span>
            </div>

            <div className="task-body">
              <p><strong>Description:</strong> {task.Description}</p>
              <p><strong>Start Date:</strong> {new Date(task.StartDate).toLocaleDateString()}</p>
              <p><strong>End Date:</strong> {new Date(task.EndDate).toLocaleDateString()}</p>

              <div className="assigned-section">
                <label><strong>Assigned Members:</strong></label>
                <select
                  multiple
                  value={task.AssignedTo || []}
                  onChange={(e) => handleMemberChange(task._id, e)}
                >
                  {members.map((m) => (
                    <option key={m._id} value={m.UserName}>{m.UserName}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="task-footer">
              <button className="delete-btn" onClick={() => handleDelete(task._id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewTasks;
