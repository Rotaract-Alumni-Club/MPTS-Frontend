import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    // Define your navigation links here
    const navLinks = [
        { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
        { name: 'Assigned Projects', path: '/projects', icon: 'view_kanban' },
        { name: 'Committees', path: '/committees', icon: 'groups' },
        { name: 'Tasks', path: '/tasks', icon: 'check_box' },
        { name: 'Profile / Key Info', path: '/profile', icon: 'person' },
        { name: 'Availability Status', path: '/availability', icon: 'toggle_on' },
    ];

    return (
        // Hidden on mobile (hidden), flex on medium screens and up (md:flex)
        <aside className="w-72 hidden md:flex flex-col border-r border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1a1a0f] h-screen shrink-0 sticky top-0">

            {/* Header / Logo Area */}
            <div className="p-8 pb-4">
                <div className="flex items-center gap-3">
                    <div
                        className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-text-main font-bold text-xl shadow-sm"
                    >
                        R
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-text-main dark:text-white text-lg font-bold leading-tight">Rotaract Club</h1>
                        <p className="text-text-muted text-xs font-medium">Member Portal</p>
                    </div>
                </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 py-6 flex flex-col gap-2 overflow-y-auto">
                {navLinks.map((link) => {
                    // Check if this link is currently active
                    const isActive = location.pathname === link.path;

                    return (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-200 group ${isActive
                                ? 'bg-accent text-white shadow-md shadow-accent/20'
                                : 'hover:bg-gray-50 dark:hover:bg-white/5 text-text-main dark:text-gray-300'
                                }`}
                        >
                            <span className={`material-symbols-outlined ${isActive ? 'text-white' : 'text-text-muted group-hover:text-text-main dark:group-hover:text-white'}`}>
                                {link.icon}
                            </span>
                            <span className={`font-medium text-sm ${isActive ? 'font-bold' : ''}`}>
                                {link.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            {/* Footer / Logout */}
            <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-full hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 group transition-colors text-text-main dark:text-gray-300">
                    <span className="material-symbols-outlined">logout</span>
                    <span className="font-medium text-sm">Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;