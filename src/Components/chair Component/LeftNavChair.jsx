import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaUser, FaProjectDiagram, FaHandsHelping } from 'react-icons/fa';
import { FaCodeCommit, FaPersonRifle } from 'react-icons/fa6';

function LeftNavigationBar() {
    const [active, setActive] = React.useState('home')

  return (
     <div>
            <div className={`LeftNavigationBar ${active ? 'active' : ''}`}>
                <div className="brand">
                    <img src="https://rcunialumni.home.blog/wp-content/uploads/2023/05/racualu-full-black-logo.png?w=1080" alt="Rotaract logo" className="logo" />
                </div>

                <div className={`row ${active === 'home' ? 'active' : ''}`} onClick={() => setActive('home')}>
                    <FaHome/>
                    <Link to="/" onClick={() => setActive('home')}>Home</Link>
                </div>
                         <div className={`row ${active === 'projects' ? 'active' : ''}`} onClick={() => setActive('projects')}>
                    <FaProjectDiagram/>
                    <Link to="/My Projects" onClick={() => setActive('projects')}>My Projects</Link>
                </div>

                <div className={`row ${active === 'profile' ? 'active' : ''}`} onClick={() => setActive('profile')}>
                    <FaUser/>
                    <Link to="/Profile" onClick={() => setActive('profile')}>Profile</Link>
                </div>

                <div className={`row ${active === 'rotaract' ? 'active' : ''}`} onClick={() => setActive('rotaract')}>
                    <Link to="/Rotaract" onClick={() => setActive('rotaract')}>Rotaract</Link>
                </div>

                <div className={`row ${active === 'manage_projects' || active === 'manage_committees' || active === 'manage_tasks' ? "purple" : ''}`} onClick={() => setActive('manage')}>
                    <>Manage</>
                    <div className="row1">
                        <Link to="/Projects" onClick={() => setActive('manage_projects')}>Projects</Link>
                        <Link to="/ManageCommittees" onClick={() => setActive('manage_committees')}>Committees</Link>
                        <Link to="/ManageTasks" onClick={() => setActive('manage_tasks')}>Tasks</Link>
                    </div>
                </div>
            
             <div className={`row ${active === 'reports' ? 'active' : ''}`} onClick={() => setActive('reports')}>
                    <FaCodeCommit/>
                    <Link to="/Reports" onClick={() => setActive('reports')}>Reports</Link>
                </div>

                <div className={`row ${active === 'settings' ? 'active' : ''}`} onClick={() => setActive('settings')}>
                    <Link to="/Settings" onClick={() => setActive('settings')}>Settings</Link>
                </div>
            </div>
        </div>
  )
}

export default LeftNavigationBar