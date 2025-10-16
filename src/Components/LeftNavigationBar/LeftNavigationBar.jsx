// ...existing code...
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaUser, FaProjectDiagram, FaHandsHelping } from 'react-icons/fa';
import { FaCodeCommit, FaPersonRifle } from 'react-icons/fa6';
import '../../SCSS/ChairStyle/LeftNavChair.scss'

function LeftNavigationBar() {
  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

  return (
    <div>
        <div className="LeftNavigationBar">
            <div className="row">
                <FaHome/>
                <NavLink to="/" className={linkClass}>Home</NavLink>
            </div>
            <div className="row">
                <FaProjectDiagram/>
                <NavLink to="/my-projects" className={linkClass}>My Projects</NavLink>
            </div>
            <div className="row">
                <FaUser/>
                <NavLink to="/profile" className={linkClass}>Profile</NavLink>
            </div>
            <div className="row">
                <NavLink to="/rotaract" className={linkClass}>Rotaract</NavLink>
            </div>
            <div className="row">
                <NavLink to="/manage" className={linkClass}>Manage</NavLink>
                <div className="row1">
                    <NavLink to="/manageProjects" className={linkClass}>Projects</NavLink>
                    <NavLink to="/manageCommittees" className={linkClass}>Committees</NavLink>
                    <NavLink to="/manageTasks" className={linkClass}>Tasks</NavLink>
                </div>
            </div>

            <div className="row">
                <FaCodeCommit/>
                <NavLink to="/reports" className={linkClass}>Reports</NavLink>
            </div>
            <div className="row">
                <NavLink to="/settings" className={linkClass}>Settings</NavLink>
            </div>
        </div>
    </div>
  )
}

export default LeftNavigationBar
