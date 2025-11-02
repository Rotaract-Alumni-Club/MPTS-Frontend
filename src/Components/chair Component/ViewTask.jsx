// ...existing code...
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaUsers } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import ConfirmDialog from "../ConfirmationComponent/ConfirmDialog";
import "../../SCSS/ChairStyle/ViewTasks.scss";

const ViewTasks = () => {
  const [groupedTasks, setGroupedTasks] = useState({});
  const [members, setMembers] = useState([]);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    committeeName: "",
    taskId: null,
    type: "", // "task" or "committee"
  });

  useEffect(() => {
    fetchTasks();
    fetchMembers();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/task/get");
      const taskData = res.data.data || res.data || [];
      // Group by Committee (use empty string key if none)
      const grouped = taskData.reduce((acc, task) => {
        const key = task.Committee || "Unassigned";
        if (!acc[key]) acc[key] = [];
        acc[key].push(task);
        return acc;
      }, {});
      setGroupedTasks(grouped);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      toast.error("Failed to load tasks");
    }
  };

  const fetchMembers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/user/all");
      setMembers(res.data.data || res.data || []);
    } catch (err) {
      console.error("Error fetching members:", err);
    }
  };

  const handleMemberChange = async (taskId, e) => {
    const selected = Array.from(e.target.selectedOptions).map((opt) => opt.value);
    try {
      await axios.put(`http://localhost:5000/api/task/updateAssigned/${taskId}`, {
        AssignedTo: selected,
      });
      toast.success("Assigned members updated");
      fetchTasks();
    } catch (err) {
      console.error("Error updating assigned members:", err);
      toast.error("Failed to update members");
    }
  };

  const openConfirmDialog = (type, name, id = null) => {
    setConfirmDialog({
      isOpen: true,
      type,
      committeeName: name,
      taskId: id,
    });
  };

  const closeConfirmDialog = () => {
    setConfirmDialog({
      isOpen: false,
      type: "",
      committeeName: "",
      taskId: null,
    });
  };

  const confirmDelete = async () => {
    const { type, committeeName, taskId } = confirmDialog;
    try {
      if (type === "committee") {
        // call backend to delete all tasks for committee
        await axios.delete(`http://localhost:5000/api/task/delete/committee/${encodeURIComponent(committeeName)}`);
        toast.success(`Deleted all tasks under ${committeeName}`);
      } else {
        // delete single task by id
        await axios.delete(`http://localhost:5000/api/task/delete/${taskId}`);
        toast.success("Task deleted successfully");
      }
      fetchTasks();
      closeConfirmDialog();
    } catch (err) {
      console.error("Error deleting:", err);
      toast.error("Failed to delete");
      closeConfirmDialog();
    }
  };

  return (
    <div className="view-tasks-container">
      <ToastContainer />

      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        title={confirmDialog.type === "committee"
          ? `Delete Committee "${confirmDialog.committeeName}"?`
          : "Delete Task?"}
        message={confirmDialog.type === "committee"
          ? `This will remove all tasks under ${confirmDialog.committeeName}.`
          : "Are you sure you want to delete this task?"}
        onConfirm={confirmDelete}
        onCancel={closeConfirmDialog}
        confirmText="Delete"
        cancelText="Cancel"
      />

      {Object.keys(groupedTasks).length === 0 ? (
        <div className="no-tasks">
          <p>No tasks found</p>
        </div>
      ) : (
        <div className="committees-grid">
          {Object.entries(groupedTasks).map(([committeeName, tasks]) => (
            <div key={committeeName} className="committee-card">
              <div className="committee-header">
                <h3>{committeeName}</h3>
                <button
                  className="btn-delete-committee"
                  onClick={() => openConfirmDialog("committee", committeeName)}
                  title="Delete all tasks for this committee"
                >
                  <FaTrash />
                </button>
              </div>

              <div className="tasks-list">
                {tasks.map((task) => (
                  <div key={task._id} className="task-row">
                    <div className="task-main">
                      <h4 className="task-name">{task.TName}</h4>
                      <p className="description">{task.Description}</p>
                      <p className="dates">
                        <strong>Start:</strong>{" "}
                        {task.StartDate ? new Date(task.StartDate).toLocaleDateString() : "-"}{" "}
                        | <strong>End:</strong>{" "}
                        {task.EndDate ? new Date(task.EndDate).toLocaleDateString() : "-"}
                      </p>
                    </div>

                    <div className="task-controls">
                      <div className="assigned-members">
                        <FaUsers className="icon" />
                        <select
                          multiple
                          value={task.AssignedTo || []}
                          onChange={(e) => handleMemberChange(task._id, e)}
                        >
                          {members.map((m) => (
                            <option key={m._id} value={m.UserName}>
                              {m.UserName}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="task-actions">
                        <button
                          className="btn-delete-task"
                          onClick={() => openConfirmDialog("task", task.TName, task._id)}
                          title="Delete task"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewTasks;
// ...existing code...