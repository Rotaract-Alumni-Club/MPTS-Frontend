import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../SCSS/AdminStyles/AdminDashboard/AdminDashboard.scss";
import Header from "../../Components/Header/Header";
import LeftNavigationBar from "../../Components/LeftNavigationBar/LeftNavigationBar";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPlus } from "react-icons/fa";

const AdminDashboard = () => {
  const [date, setDate] = useState(new Date());

  const projects = [
    ["Wanakkam", "2025"],
    ["Sabandi", "2024"],
    ["Binara Padura", "2024"],
    ["Cricket Fiesta", "2023"],
    ["Grama Prabodya", "2023"],
    ["Web3 Ceylon", "2022"],
  ];

  return (
    <div className="admin-dashboard-page">
      <Header />
      <LeftNavigationBar />

      <div className="dashboard-flex">
        {/* left profile sidebar */}
        <aside className="project-card sidebar-profile">
          <div className="profile-avatar">
            <img src="https://placekitten.com/240/240" alt="profile" />
          </div>

          <div className="profile-name">
            <h2>Jenny</h2>
            <h3>Sherman</h3>
          </div>

          <div className="profile-actions">
            <button className="btn">EditProfile</button>
            <button className="btn btn-primary">View more</button>
          </div>

          <hr className="profile-divider" />

          <h4 className="profile-section-title">Personal Details</h4>
          <div className="profile-details">
            <div><FaPhoneAlt className="icon" /> <span>+94 77 2315 897</span></div>
            <div><FaEnvelope className="icon" /> <span>Jenny33@gmail.com</span></div>
            <div><FaMapMarkerAlt className="icon" /> <span>University of Moratuwa</span></div>
          </div>

          <h4 className="profile-section-title">Committees</h4>
          <ul className="committees-list">
            <li>Flyer Design</li>
            <li>Content Creator</li>
          </ul>
        </aside>

        {/* center area */}
        <main className="main-content">
          <section className="project-card performance-card">
            <div className="performance-header">
              <h3>2025 Performance review</h3>
              <div className="hr" />
            </div>

            <div className="performance-body">
              <div className="donut">
                <svg viewBox="0 0 36 36" width="160" height="160" className="donut-svg">
                  <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Z" fill="#ece7fb" />
                  <path d="M18 2a16 16 0 0 1 11 4.2" fill="#d9534f" />
                  <circle cx="18" cy="18" r="9" fill="#f9f9fb" />
                  <text x="18" y="20.3" textAnchor="middle" fontSize="6" fill="#1f1f1f" fontWeight="700">76%</text>
                </svg>
              </div>

              <div className="performance-text">
                <p className="muted">Performance Rating</p>
              </div>
            </div>
          </section>

          <section className="project-card contribution-card">
            <div className="contribution-header">
              <h3>Contribution</h3>
              <div className="hr" />
            </div>

            <div className="contribution-body">
              <div className="contrib-item"><button><FaPlus size={36} color="#6b3fa8" /></button></div>
              <div className="contrib-item"><button><FaPlus size={36} color="#f06ab4" /></button></div>
              <div className="contrib-item"><button><FaPlus size={36} color="#5fb3d3" /></button></div>
            </div>
          </section>
        </main>

        {/* right experience card */}
        <aside className="calendar-container experience-card">
          <h3 className="experience-title">Experience & performance</h3>

          <div className="experience-section">
            <p className="muted">Years of experience</p>
            <div className="experience-number">5</div>
          </div>

          <div className="worked-projects">
            <p className="muted">Worked Projects</p>
            <table className="projects-table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((r, i) => (
                  <tr key={i}>
                    <td>{r[0]}</td>
                    <td>{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
{/* 
          <div className="small-calendar">
            <Calendar onChange={setDate} value={date} />
            <div className="selected-date">{date.toDateString()}</div>
          </div> */}
        </aside>
      </div>
    </div>
  );
};

export default AdminDashboard;