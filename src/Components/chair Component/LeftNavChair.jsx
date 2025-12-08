import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaUser, FaProjectDiagram, FaHandsHelping } from 'react-icons/fa';
import { FaCodeCommit, FaPersonRifle } from 'react-icons/fa6';

function LeftNavigationBar() {
    const [active, setActive] = React.useState(() => 
        localStorage.getItem('activeNav') || 'home'
    );
    const location = useLocation();

    // Update active state based on current route
    useEffect(() => {
        const path = location.pathname;
        let newActive = 'home';

        if (path.includes('Projects')) newActive = 'manage_projects';
        if (path.includes('ManageCommittees')) newActive = 'manage_committees';
        if (path.includes('ManageTasks')) newActive = 'manage_tasks';
        if (path === '/Profile') newActive = 'profile';
        if (path === '/Rotaract') newActive = 'rotaract';
        if (path === '/Reports') newActive = 'reports';
        if (path === '/Settings') newActive = 'settings';
        if (path === '/My Projects') newActive = 'projects';
        if (path === '/') newActive = 'home';

        setActive(newActive);
        localStorage.setItem('activeNav', newActive);
    }, [location]);

    const handleNav = (key) => {
        setActive(key);
        localStorage.setItem('activeNav', key);
    }

    return (
        <div>
            <div className={`LeftNavigationBar`}>
                <div className="brand">
                    <img src="https://rcunialumni.home.blog/wp-content/uploads/2023/05/racualu-full-black-logo.png?w=1080" alt="Rotaract logo" className="logo" />
                </div>

                <div className={`row ${active === 'home' ? 'active' : ''}`} onClick={() => handleNav('home')}>
                    <FaHome/>
                    <Link to="/">Home</Link>
                </div>

                <div className={`row ${active === 'projects' ? 'active' : ''}`} onClick={() => handleNav('projects')}>
                    <FaProjectDiagram/>
                    <Link to="/My Projects">My Projects</Link>
                </div>

                <div className={`row ${active === 'profile' ? 'active' : ''}`} onClick={() => handleNav('profile')}>
                    <FaUser/>
                    <Link to="/Profile">Profile</Link>
                </div>

                <div className={`row ${active === 'rotaract' ? 'active' : ''}`} onClick={() => handleNav('rotaract')}>
                    <Link to="/Rotaract">Rotaract</Link>
                </div>

                <div className={`row manage-row ${active.startsWith('manage_') ? "active" : ''}`}>
                    <span className="manage-label">Manage</span>
                    <div className="row1">
                        <Link 
                            className={active === 'manage_projects' ? 'active' : ''} 
                            to="/Projects" 
                            onClick={() => handleNav('manage_projects')}
                        >
                            Projects
                        </Link>
                        <Link 
                            className={active === 'manage_committees' ? 'active' : ''} 
                            to="/ManageCommittees" 
                            onClick={() => handleNav('manage_committees')}
                        >
                            Committees
                        </Link>
                        <Link 
                            className={active === 'manage_tasks' ? 'active' : ''} 
                            to="/ManageTasks" 
                            onClick={() => handleNav('manage_tasks')}
                        >
                            Tasks
                        </Link>
                    </div>
                </div>

                <div className={`row ${active === 'reports' ? 'active' : ''}`} onClick={() => handleNav('reports')}>
                    <FaCodeCommit/>
                    <Link to="/Reports">Reports</Link>
                </div>

                <div className={`row ${active === 'settings' ? 'active' : ''}`} onClick={() => handleNav('settings')}>
                    <Link to="/Settings">Settings</Link>
                </div>
            </div>
        </div>
    )
}

export default LeftNavigationBar