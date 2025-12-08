// import React from 'react'
import React, { useMemo } from 'react'

const MemberViewAccountComponent = () => {
   const sampleMembers = useMemo(() => [
        { id: 1, avatar: "https://i.pravatar.cc/80?img=12", name: "Aisha Khan", email: "aisha.khan@example.com", role: "Administrator", status: "active", registeredAt: "2025-02-10T09:22:00Z" },
        { id: 2, avatar: "https://i.pravatar.cc/80?img=5", name: "Daniel Smith", email: "daniel.smith@example.com", role: "Member", status: "inactive", registeredAt: "2024-11-03T11:12:00Z" },
        { id: 3, avatar: "", name: "Fatima Ali", email: "fatima.ali@example.com", role: "Moderator", status: "active", registeredAt: "2025-05-16T14:40:00Z" },
      ], [])
      const formatDate = (iso) => {
        try { return new Date(iso).toLocaleDateString() } catch { return iso }
      }
      
  return (
    <div>
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
            </div>
    </div>
  )
}

export default MemberViewAccountComponent
