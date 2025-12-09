import React, { useState } from "react";
import Header from '../../Components/Header/Header'
import LeftNavChair from '../../Components/chair Component/LeftNavChair'
import "../../SCSS/ChairStyle/ChairDashboard.scss";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ChairDashboard = () => {
  const projects = [
    { name: "Wanakkam", year: "2025", role: "ChairPerson" },
    { name: "Sabandi", year: "2024", role: "Designer" },
    { name: "Binara Padura", year: "2024", role: "Designer" },
    { name: "Cricket Fiesta", year: "2023", role: "ContentCreator" },
    { name: "Grama Prabodya", year: "2023", role: "Designer" },
    { name: "Web3 Ceylon", year: "2022", role: "ContentCreator" },
  ];

  return (
    <>
      <Header />
      <LeftNavChair />
      <div className="chair-dashboard">
        <div className="dashboard-container">
          {/* Left Profile Sidebar */}
          <aside className="profile-sidebar">
            <div className="profile-card">
              <div className="profile-avatar">
                <img src="https://placekitten.com/240/240" alt="profile" />
              </div>

              <div className="profile-name">
                <h2>Jenny</h2>
                <h3>Sherman</h3>
              </div>

              <div className="profile-actions">
                <button className="btn btn-edit">EditProfile</button>
                <button className="btn btn-primary">View more</button>
              </div>

              <hr className="profile-divider" />

              <h4 className="section-title">Personal Details</h4>
              <div className="profile-details">
                <div className="detail-item">
                  <FaPhoneAlt className="icon" />
                  <span>+94 77 2315 897</span>
                </div>
                <div className="detail-item">
                  <FaEnvelope className="icon" />
                  <span>Jenny33@gmail.com</span>
                </div>
                <div className="detail-item">
                  <FaMapMarkerAlt className="icon" />
                  <span>University of Moratuwa</span>
                </div>
              </div>

              <h4 className="section-title">Committees</h4>
              <ul className="committees-list">
                <li>→ Flyer Design</li>
                <li>→ Content Creator</li>
              </ul>
            </div>
          </aside>

          {/* Center Content */}
          <main className="main-content">
            {/* Performance Card */}
            <div className="card performance-card">
              <h3 className="card-title">2025 Performance review</h3>
              <hr className="card-divider" />

              <div className="performance-body">
                <div className="donut-chart">
                  <svg viewBox="0 0 100 100" width="140" height="140">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="8" />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="#6f4bd8" 
                      strokeWidth="8" 
                      strokeDasharray="214 283"
                      strokeDashoffset="0"
                      transform="rotate(-90 50 50)"
                    />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="#ff6b9d" 
                      strokeWidth="8" 
                      strokeDasharray="69 283"
                      strokeDashoffset="-214"
                      transform="rotate(-90 50 50)"
                    />
                    <circle cx="50" cy="50" r="30" fill="white" />
                    <text x="50" y="55" textAnchor="middle" fontSize="20" fontWeight="700" fill="#333">76%</text>
                  </svg>
                </div>

                <div className="performance-label">
                  <p className="muted-text">Performance Rating</p>
                </div>
              </div>
            </div>

            {/* Contribution Card */}
            <div className="card contribution-card">
              <h3 className="card-title">Contribution</h3>
              <hr className="card-divider" />

              <div className="contribution-icons">
                <div className="contrib-icon">📊</div>
                <div className="contrib-icon">📈</div>
                <div className="contrib-icon">📉</div>
              </div>
            </div>
          </main>

          {/* Right Experience Sidebar */}
          <aside className="experience-sidebar">
            <div className="experience-card">
              <h3 className="card-title">Experience & performance</h3>

              <div className="experience-section">
                <p className="muted-text">Years of experience</p>
                <div className="experience-number">5</div>
              </div>

              <div className="worked-projects">
                <p className="muted-text">Worked Projects</p>
                <table className="projects-table">
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Year</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((p, i) => (
                      <tr key={i}>
                        <td>{p.name}</td>
                        <td>{p.year}</td>
                        <td>{p.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default ChairDashboard;