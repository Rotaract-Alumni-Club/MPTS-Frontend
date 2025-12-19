import React, { useState } from 'react';

const Tasks = () => {
    // Sample Data - Simulating a MongoDB fetch
    const initialTasks = [
        {
            id: 1,
            title: "Draft Fundraising Proposal",
            project: "Annual Charity Gala",
            projectColor: "bg-blue-400",
            deadline: "Oct 24, 2023",
            isOverdue: true, // triggers the warning style
            status: "In Progress",
            statusColor: "bg-primary text-text-main",
            completed: false
        },
        {
            id: 2,
            title: "Contact Venue Manager",
            project: "Community Service Day",
            projectColor: "bg-green-400",
            deadline: "Oct 30, 2023",
            isOverdue: false,
            status: "Pending",
            statusColor: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
            completed: false
        },
        {
            id: 3,
            title: "Submit Monthly Report",
            project: "Club Administration",
            projectColor: "bg-purple-400",
            deadline: "Nov 01, 2023",
            isOverdue: false,
            status: "Completed",
            statusColor: "bg-accent-purple text-text-main",
            completed: true
        },
        {
            id: 4,
            title: "Update Member Roster",
            project: "Membership Drive",
            projectColor: "bg-yellow-400",
            deadline: "Nov 05, 2023",
            isOverdue: false,
            status: "Pending",
            statusColor: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
            completed: false
        },
        {
            id: 5,
            title: "Finalize Budget",
            project: "Finance Committee",
            projectColor: "bg-red-400",
            deadline: "Nov 10, 2023",
            isOverdue: false,
            status: "In Progress",
            statusColor: "bg-primary text-text-main",
            completed: false
        },
        {
            id: 6,
            title: "Coordinate Speaker Gifts",
            project: "Annual Charity Gala",
            projectColor: "bg-blue-400",
            deadline: "Oct 20, 2023",
            isOverdue: false,
            status: "Completed",
            statusColor: "bg-accent-purple text-text-main",
            completed: true
        }
    ];

    const [tasks] = useState(initialTasks);

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-text-main overflow-hidden h-screen flex w-full">

            {/* // removed location */}

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full min-w-0 bg-background-light dark:bg-background-dark relative">

                {/* Page Header */}
                <header className="px-8 py-6 pb-2">
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-text-main dark:text-white tracking-tight">My Tasks</h2>
                            <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">Manage your contributions and deadlines</p>
                        </div>
                        <button className="flex items-center gap-2 bg-primary hover:bg-[#e6e205] text-text-main px-6 py-3 rounded-full font-bold text-sm transition-transform active:scale-95 shadow-sm">
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            <span>Create New Task</span>
                        </button>
                    </div>
                </header>

                {/* Filters & Controls */}
                <div className="px-8 py-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full max-w-md group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-gray-400">search</span>
                            </div>
                            <input
                                className="block w-full pl-10 pr-3 py-3 rounded-xl border-none bg-surface-light dark:bg-[#2d2c15] text-text-main dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-[#36351a] transition-all text-sm"
                                placeholder="Search tasks by title or project..."
                                type="text"
                            />
                        </div>

                        {/* Filter Chips */}
                        <div className="flex gap-2 flex-wrap">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-text-main text-white text-sm font-medium transition-colors">
                                <span className="material-symbols-outlined text-[18px]">list</span>
                                All Tasks
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-light dark:bg-[#2d2c15] hover:bg-gray-100 dark:hover:bg-[#36351a] text-text-main dark:text-gray-300 text-sm font-medium border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
                                <span className="material-symbols-outlined text-[18px]">pending</span>
                                Pending
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-light dark:bg-[#2d2c15] hover:bg-gray-100 dark:hover:bg-[#36351a] text-text-main dark:text-gray-300 text-sm font-medium border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
                                <span className="material-symbols-outlined text-[18px]">timelapse</span>
                                In Progress
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-light dark:bg-[#2d2c15] hover:bg-gray-100 dark:hover:bg-[#36351a] text-text-main dark:text-gray-300 text-sm font-medium border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
                                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                Completed
                            </button>
                        </div>
                    </div>
                </div>

                {/* Table Area */}
                <div className="flex-1 overflow-hidden px-8 pb-8">
                    <div className="h-full overflow-y-auto custom-scrollbar rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1f1e0d] shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-surface-light dark:bg-[#282712] sticky top-0 z-10">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-gray-400">Task Title</th>
                                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-gray-400">Related Project</th>
                                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-gray-400">Deadline</th>
                                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-gray-400 w-40">Status</th>
                                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-gray-400 text-right w-24">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">

                                {tasks.map((task) => (
                                    <tr key={task.id} className="hover:bg-primary/5 dark:hover:bg-primary/5 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className={`text-sm font-semibold ${task.completed ? 'text-gray-400 dark:text-gray-500 line-through decoration-gray-400' : 'text-text-main dark:text-white'}`}>
                                                    {task.title}
                                                </span>
                                                <span className="text-xs text-text-secondary dark:text-gray-500 md:hidden">{task.project}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${task.projectColor}`}></div>
                                                <span className={`text-sm ${task.completed ? 'text-gray-400 dark:text-gray-500' : 'text-text-secondary dark:text-gray-300'}`}>
                                                    {task.project}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {task.isOverdue ? (
                                                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded-md w-fit">
                                                    <span className="material-symbols-outlined text-[16px]">warning</span>
                                                    <span className="text-xs font-medium">{task.deadline}</span>
                                                </div>
                                            ) : (
                                                <span className={`text-sm ${task.completed ? 'text-gray-400 dark:text-gray-500' : 'text-text-secondary dark:text-gray-400'}`}>
                                                    {task.deadline}
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full ${task.statusColor} text-xs font-bold w-full ${task.completed ? 'shadow-sm' : ''}`}>
                                                {task.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-gray-400 hover:text-text-main dark:hover:text-white transition-colors">
                                                <span className="material-symbols-outlined">{task.completed ? 'visibility' : 'more_vert'}</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Tasks;