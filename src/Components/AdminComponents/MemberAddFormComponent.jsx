import React, { useMemo } from 'react'
import "../../SCSS/componentStyle/AdminMemberForm.scss"
import "../../SCSS/AdminStyles/AdminViewAccount/AdminViewAccount.scss"

const MemberAddFormComponent = () => {
    // sample members — replace with real data or props/store
    // const sampleMembers = useMemo(() => [
    //   { id: 1, avatar: "https://i.pravatar.cc/80?img=12", name: "Aisha Khan", email: "aisha.khan@example.com", role: "Administrator", status: "active", registeredAt: "2025-02-10T09:22:00Z" },
    //   { id: 2, avatar: "https://i.pravatar.cc/80?img=5", name: "Daniel Smith", email: "daniel.smith@example.com", role: "Member", status: "inactive", registeredAt: "2024-11-03T11:12:00Z" },
    //   { id: 3, avatar: "", name: "Fatima Ali", email: "fatima.ali@example.com", role: "Moderator", status: "active", registeredAt: "2025-05-16T14:40:00Z" },
    // ], [])

    const formatDate = (iso) => {
      try { return new Date(iso).toLocaleDateString() } catch { return iso }
    }

    return (
        <div className="member-add-form">
            <h2>Basic Information</h2>
            <form>
                <label htmlFor="memberName">Member Name:</label>
                <input type="text" id="memberName" name="memberName" required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="role">Contact Number:</label>
                <input type="text" id="contactNumber" name="contactNumber" required />
            </form>

            <h2>Personal Details</h2>
            <form>
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required />
                <br />
                <label htmlFor="Department">Department/Faculty:</label>
                <input type="text" id="department" name="department" required />
                <br />
                <label htmlFor="Batch">Batch:</label>
                <input type="text" id="batch" name="batch" required />
                <br />
            </form>

            <button type="submit">Create Account</button>

            {/* /Modern members table (uses AdminViewAccount.scss)
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
                  {sampleMembers.map(m => (
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
                        <button className="btn view" title="View">View</button>
                        <button className="btn edit" title="Edit">Edit</button>
                        <button className="btn delete" title="Delete">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}
        </div>
    )
}

export default MemberAddFormComponent
