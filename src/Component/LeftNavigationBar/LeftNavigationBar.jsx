import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaUser, FaProjectDiagram, FaHandsHelping } from 'react-icons/fa';
import { FaCodeCommit, FaPersonRifle } from 'react-icons/fa6';
function LeftNavigationBar() {
  return (
    <div>
        <div className="LeftNavigationBar">
            <div className="row">
                <FaHome/>
                <Link to="/">Home</Link>
            </div>
            <div className="row">
                <FaProjectDiagram/>
                <Link to="/My Projects">My Projects</Link>
            </div>
            <div className="row">
                <FaUser/>
                <Link to="/Profile">Profile</Link>
            </div>
            <div className="row">
                <Link to="/Rotaract">Rotaract</Link>
            </div>
            <div className="row">
                <Link to="/Manage">Manage</Link>
                <div className="row1">
                    <Link to="/Manage/Projects">Projects</Link>
                    <Link to="/Manage/Members">Members</Link>
                </div>

            </div>
            
            <div className="row">
                <FaCodeCommit/>
                <Link to="/Committees">Committees</Link>
            </div>
            <div className="row">
                <Link to="/Reports">Reports</Link>
            </div>
            <div className="row">
                <Link to="/Settings">Settings</Link>
            </div>
            
        </div>
    </div>
  )
}

export default LeftNavigationBar