import React from 'react';
import { Calendar } from 'lucide-react';

const Sidebar = () => {
    return (
        <aside className="hidden lg:flex flex-col w-72 h-screen bg-white border-r border-slate-200 py-6 px-4 shrink-0 sticky top-0">
            <div className="flex items-center gap-3 px-4 mb-10">
                <div className="size-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-600/30">
                    {/* Diversity / Group Icon */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-lg font-bold leading-none tracking-tight">Rotaract</h1>
                    <p className="text-xs text-slate-500 font-medium">Member Portal</p>
                </div>
            </div>
            
            <nav className="flex flex-col gap-2 flex-1">
                {/* Dashboard (Active) */}
                <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600/10 text-blue-600 transition-all duration-200" href="#">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
                    <span className="font-bold text-sm">Dashboard</span>
                </a>
                {/* Projects */}
                <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200 group" href="#">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/></svg>
                    <span className="font-medium text-sm">Projects</span>
                </a>
                {/* Tasks */}
                <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200 group" href="#">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    <span className="font-medium text-sm">Tasks</span>
                </a>
                {/* Calendar */}
                <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200 group" href="#">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium text-sm">Calendar</span>
                </a>
                {/* Reports */}
                <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200 group" href="#">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                    <span className="font-medium text-sm">Reports</span>
                </a>
                {/* Directory */}
                <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200 group" href="#">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                    <span className="font-medium text-sm">Directory</span>
                </a>
            </nav>
            
            {/* Bottom Actions / Profile */}
            <div className="flex flex-col gap-2 pt-6 mt-2 border-t border-slate-200">
                <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-all duration-200 group" href="#">
                    {/* Settings Icon */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
                    <span className="font-medium text-sm">Settings</span>
                </a>
                
                <div className="flex items-center gap-3 px-4 py-3 mt-2">
                    <div className="size-10 rounded-full bg-cover bg-center border-2 border-blue-600/20" style={{backgroundImage: "url('https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah')"}}></div>
                    <div className="flex flex-col overflow-hidden">
                        <span className="text-sm font-bold truncate text-slate-900">Sarah Jenkins</span>
                        <span className="text-xs text-slate-500 truncate">Member</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;