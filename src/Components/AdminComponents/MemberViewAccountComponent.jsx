// import React from 'react'
import React, { useState } from 'react'
import ConfirmDialog from '../ConfirmationComponent/ConfirmDialog'
import "../../SCSS/AdminStyles/AdminViewAccount/AdminViewAccount.scss"
import "../../SCSS/componentStyle/MemberViewModal.scss"

const MemberViewAccountComponent = ({ members = [], onMemberDeleted, onMemberUpdated }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);
  const [editFormData, setEditFormData] = useState(null);

  const formatDate = (iso) => {
    try { return new Date(iso).toLocaleDateString() } catch { return iso }
  }

  const handleViewClick = (member) => {
    setSelectedMember(member);
    setEditFormData(member);
    setIsEditMode(false);
  };

  const handleEditClick = (member) => {
    setSelectedMember(member);
    setEditFormData(member);
    setIsEditMode(true);
  };

  const handleDeleteClick = (member) => {
    setMemberToDelete(member);
    setShowConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
    if (memberToDelete && onMemberDeleted) {
      onMemberDeleted(memberToDelete._id || memberToDelete.id);
    }
    setShowConfirmDelete(false);
    setMemberToDelete(null);
    setSelectedMember(null);
  };

  const handleCancelDelete = () => {
    setShowConfirmDelete(false);
    setMemberToDelete(null);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
    setIsEditMode(false);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    if (onMemberUpdated) {
      onMemberUpdated(editFormData);
    }
    setSelectedMember(null);
    setIsEditMode(false);
  };

  const handleEnterEditMode = () => {
    setIsEditMode(true);
  };
  return (
    <div>
      <ConfirmDialog
        isOpen={showConfirmDelete}
        title="Delete Member"
        message={`Are you sure you want to delete ${memberToDelete?.name}? This action cannot be undone.`}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        confirmText="Delete"
        cancelText="Cancel"
      />

      {selectedMember && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{isEditMode ? 'Edit Member' : 'Member Details'}</h2>
              <button className="modal-close" onClick={handleCloseModal}>×</button>
            </div>

            <div className="modal-body">
              {!isEditMode ? (
                <div className="member-details">
                  <div className="detail-section">
                    <img src={selectedMember.avatar || "/assets/default-avatar.png"} alt={selectedMember.name} className="member-avatar" />
                  </div>
                  <div className="detail-section">
                    <div className="detail-item">
                      <label>Name:</label>
                      <p>{selectedMember.name}</p>
                    </div>
                    <div className="detail-item">
                      <label>Email:</label>
                      <p>{selectedMember.email}</p>
                    </div>
                    <div className="detail-item">
                      <label>Contact Number:</label>
                      <p>{selectedMember.contactNumber}</p>
                    </div>
                  </div>
                  <div className="detail-section">
                    <div className="detail-item">
                      <label>Gender:</label>
                      <p>{selectedMember.gender}</p>
                    </div>
                    <div className="detail-item">
                      <label>Date of Birth:</label>
                      <p>{formatDate(selectedMember.dob)}</p>
                    </div>
                    <div className="detail-item">
                      <label>Department:</label>
                      <p>{selectedMember.department}</p>
                    </div>
                    <div className="detail-item">
                      <label>Batch:</label>
                      <p>{selectedMember.batch}</p>
                    </div>
                    <div className="detail-item">
                      <label>Role:</label>
                      <p>{selectedMember.role}</p>
                    </div>
                    <div className="detail-item">
                      <label>Status:</label>
                      <p><span className={`status-badge ${selectedMember.status === "active" ? "status-active" : "status-inactive"}`}>
                        {selectedMember.status === "active" ? "Active" : "Inactive"}
                      </span></p>
                    </div>
                  </div>
                </div>
              ) : (
                <form className="member-edit-form">
                  <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={editFormData.name} onChange={handleEditInputChange} />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={editFormData.email} onChange={handleEditInputChange} />
                  </div>
                  <div className="form-group">
                    <label>Contact Number:</label>
                    <input type="text" name="contactNumber" value={editFormData.contactNumber} onChange={handleEditInputChange} />
                  </div>
                  <div className="form-group">
                    <label>Gender:</label>
                    <select name="gender" value={editFormData.gender} onChange={handleEditInputChange}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Date of Birth:</label>
                    <input type="date" name="dob" value={editFormData.dob} onChange={handleEditInputChange} />
                  </div>
                  <div className="form-group">
                    <label>Department:</label>
                    <input type="text" name="department" value={editFormData.department} onChange={handleEditInputChange} />
                  </div>
                  <div className="form-group">
                    <label>Batch:</label>
                    <input type="text" name="batch" value={editFormData.batch} onChange={handleEditInputChange} />
                  </div>
                </form>
              )}
            </div>

            <div className="modal-footer">
              {!isEditMode ? (
                <>
                  <button className="btn-secondary" onClick={handleCloseModal}>Close</button>
                  <button className="btn-primary" onClick={handleEnterEditMode}>Edit</button>
                </>
              ) : (
                <>
                  <button className="btn-secondary" onClick={() => setIsEditMode(false)}>Cancel</button>
                  <button className="btn-primary" onClick={handleSaveChanges}>Save Changes</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* /Modern members table (uses AdminViewAccount.scss) */}
      <div style={{ marginTop: 24 }} className="table-wrapper">
        <table className="member-table" role="table" aria-label="Members table">
          <thead>
            <tr>
              <th style={{ width: 64 }}></th>
              <th>Name</th>
              <th>Email</th>
              <th style={{ width: 130 }}>Role</th>
              <th style={{ width: 110 }} className="center">Status</th>
              <th style={{ width: 140 }}>Registered</th>
              <th style={{ width: 160 }} className="center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map(m => (
              <tr key={m.id}>
                <td>
                  <img src={m.avatar || "/assets/default-avatar.png"} alt={`${m.name} avatar`} className="avatar" />
                </td>
                <td>
                  <div className="name-cell">
                    <div className="name-text">{m.name}</div>
                    <div className="email">{m.role}</div>
                  </div>
                </td>
                <td><div className="email">{m.email}</div></td>
                <td className="center">{m.role}</td>
                <td className="center">
                  <span className={`status-badge ${m.status === "active" ? "status-active" : "status-inactive"}`}>
                    {m.status === "active" ? "Active" : "Inactive"}
                  </span>
                </td>
                <td><div className="registered-date">{formatDate(m.registeredAt)}</div></td>
                <td className="actions">
                  <button className="btn view" title="View" onClick={() => handleViewClick(m)}>View</button>
                  <button className="btn edit" title="Edit" onClick={() => handleEditClick(m)}>Edit</button>
                  <button className="btn delete" title="Delete" onClick={() => handleDeleteClick(m)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MemberViewAccountComponent
