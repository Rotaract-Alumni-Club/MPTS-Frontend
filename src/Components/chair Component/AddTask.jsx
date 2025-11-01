import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../SCSS/ChairStyle/AddTask.scss";

const AddTask = () => {
  const [tasks, setTasks] = useState([
    { TName: "", Description: "", AssignedTo: [], Project: "", Committee: "", Status: "Pending", StartDate: "", EndDate: "" },
  ]);
  const [members, setMembers] = useState([]);
  const [committees, setCommittees] = useState([]);

  useEffect(() => {
    fetchMembers();
    fetchCommittees();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/user/all");
      setMembers(res.data.data || []);
    } catch (err) {
      console.error("Error fetching members:", err);
    }
  };

  const fetchCommittees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/committee/getAll");
      setCommittees(res.data.data || []);
    } catch (err) {
      console.error("Error fetching committees:", err);
    }
  };

  const handleTaskChange = (index, field, value) => {
    const newTasks = [...tasks];
    newTasks[index][field] = value;
    setTasks(newTasks);
  };

  const handleAddRow = () => {
    setTasks([
      ...tasks,
      { TName: "", Description: "", AssignedTo: [], Project: "", Committee: "", Status: "Pending", StartDate: "", EndDate: "" },
    ]);
  };

  const handleMemberSelect = (index, member) => {
    const updatedTasks = [...tasks];
    const selectedList = updatedTasks[index].AssignedTo || [];
    if (!selectedList.includes(member.name)) {
      updatedTasks[index].AssignedTo = [...selectedList, member.name];
    }
    setTasks(updatedTasks);
  };

  const handleRemoveMember = (index, memberName) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].AssignedTo = updatedTasks[index].AssignedTo.filter((m) => m !== memberName);
    setTasks(updatedTasks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Promise.all(
        tasks.map((task) => axios.post("http://localhost:5000/api/tasks/create", task))
      );
      alert("Tasks added successfully!");
    } catch (err) {
      console.error("Error saving tasks:", err);
      alert("Error saving tasks");
    }
  };

  return (
    <div className="add-task">
      <div className="table-wrapper">
        <form onSubmit={handleSubmit}>
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Description</th>
                <th>Assigned Members</th>
                <th>Committee</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      value={task.TName}
                      onChange={(e) => handleTaskChange(index, "TName", e.target.value)}
                      placeholder="Enter task name"
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      value={task.Description}
                      onChange={(e) => handleTaskChange(index, "Description", e.target.value)}
                      placeholder="Enter description"
                    />
                  </td>

                  {/* --- Assigned Members section like AddCommitteeForm --- */}
                  <td className="assigned-members">
                    <div className="selected-members">
                      {task.AssignedTo.map((member, i) => (
                        <span key={i} className="member-chip">
                          {member}
                          <button type="button" onClick={() => handleRemoveMember(index, member)}>
                            ×
                          </button>
                        </span>
                      ))}
                    </div>

                    <select
                      onChange={(e) => {
                        const member = members.find((m) => m.name === e.target.value);
                        if (member) handleMemberSelect(index, member);
                      }}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select member...
                      </option>
                      {members.map((member) => (
                        <option key={member._id} value={member.name}>
                          {member.name}
                        </option>
                      ))}
                    </select>
                  </td>

                  {/* --- Committee Dropdown --- */}
                  <td>
                    <select
                      value={task.Committee}
                      onChange={(e) => handleTaskChange(index, "Committee", e.target.value)}
                    >
                      <option value="">Select Committee</option>
                      {committees.map((c) => (
                        <option key={c._id} value={c.CName}>
                          {c.CName}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td>
                    <input
                      type="date"
                      value={task.StartDate}
                      onChange={(e) => handleTaskChange(index, "StartDate", e.target.value)}
                    />
                  </td>

                  <td>
                    <input
                      type="date"
                      value={task.EndDate}
                      onChange={(e) => handleTaskChange(index, "EndDate", e.target.value)}
                    />
                  </td>

                  <td>
                    <button type="button" onClick={handleAddRow}>
                      +
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="submit-section">
            <button type="submit" className="btn-submit">
              Save Tasks
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
