import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaUser, FaProjectDiagram, FaHandsHelping } from 'react-icons/fa';
import { FaCodeCommit, FaPersonRifle } from 'react-icons/fa6';

function LeftNavigationBar() {
  return (
    <div>
        <div className="LeftNavigationBar">
             <div className="brand">
        <img src="https://rcunialumni.home.blog/wp-content/uploads/2023/05/racualu-full-black-logo.png?w=1080" alt="Rotaract logo" className="logo" />
      </div>
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
                    <Link to="/Projects">Projects</Link>
                    <Link to="/ManageCommittees">Committees</Link>
                    <Link to="/ManageTasks">Tasks</Link>
                </div>

            </div>
            
            <div className="row">
                <FaCodeCommit/>
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