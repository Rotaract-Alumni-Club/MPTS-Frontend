import React, { useState } from 'react';

const UserProfile = () => {
    // State to manage form data (Simulates fetching from MongoDB)
    const [formData, setFormData] = useState({
        fullName: "John Doe",
        regNumber: "ROT-2023-8821",
        email: "john.doe@example.com",
        contactNumber: "+1 (555) 000-0000",
        faculty: "Faculty of Computing",
        department: "Software Engineering",
        academicYear: "Year 3"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Saving changes to backend:", formData);
        // Add axios.put() or fetch() logic here
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#1c1c0d] dark:text-white font-display overflow-hidden min-h-screen flex w-full">

            {/* // removed location */}

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-white dark:bg-background-dark relative w-full">
                <div className="max-w-[1024px] mx-auto w-full pb-10">

                    {/* Page Heading */}
                    <div className="px-8 pt-10 pb-6 flex flex-col gap-2">
                        <h1 className="text-4xl font-black tracking-tight text-[#1c1c0d] dark:text-white">My Profile</h1>
                        <p className="text-[#9e9d47] text-lg font-normal">Manage your personal information and club membership details.</p>
                    </div>

                    <div className="px-8">
                        {/* Profile Header Card */}
                        <div className="flex items-center gap-6 p-6 mb-8 rounded-2xl bg-background-light dark:bg-[#2a2912] border border-[#e9e8ce] dark:border-[#3a391a]">
                            <div
                                className="w-24 h-24 rounded-full bg-cover bg-center border-4 border-white dark:border-[#3a391a] shadow-sm"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop')" }}
                            ></div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-2xl font-bold text-[#1c1c0d] dark:text-white">{formData.fullName}</h2>
                                <p className="text-[#5c5c4f] dark:text-[#cfcfbf] font-medium">Member ID: <span className="font-mono text-accent">19482</span></p>
                                <button className="text-sm text-accent hover:text-[#c04df9] font-medium w-fit mt-1">Change Avatar</button>
                            </div>
                        </div>

                        {/* Form Section */}
                        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                            {/* Personal Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col gap-2">
                                    <span className="text-[#1c1c0d] dark:text-white text-sm font-semibold pl-1">Full Name</span>
                                    <input
                                        name="fullName"
                                        className="w-full h-12 px-5 rounded-full bg-white dark:bg-[#1a1a0b] border border-[#e9e8ce] dark:border-[#3a391a] text-[#1c1c0d] dark:text-white placeholder:text-[#9e9d47] focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                        type="text"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-[#1c1c0d] dark:text-white text-sm font-semibold pl-1">Registration Number</span>
                                    <input
                                        name="regNumber"
                                        className="w-full h-12 px-5 rounded-full bg-[#f4f4e6] dark:bg-[#2a2912] border border-[#e9e8ce] dark:border-[#3a391a] text-[#5c5c4f] dark:text-[#cfcfbf] cursor-not-allowed"
                                        readOnly
                                        type="text"
                                        value={formData.regNumber}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-[#1c1c0d] dark:text-white text-sm font-semibold pl-1">Email Address</span>
                                    <input
                                        name="email"
                                        className="w-full h-12 px-5 rounded-full bg-white dark:bg-[#1a1a0b] border border-[#e9e8ce] dark:border-[#3a391a] text-[#1c1c0d] dark:text-white placeholder:text-[#9e9d47] focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-[#1c1c0d] dark:text-white text-sm font-semibold pl-1">Contact Number</span>
                                    <div className="relative">
                                        <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#9e9d47] text-[20px]">call</span>
                                        <input
                                            name="contactNumber"
                                            className="w-full h-12 pl-12 pr-5 rounded-full bg-white dark:bg-[#1a1a0b] border border-[#e9e8ce] dark:border-[#3a391a] text-[#1c1c0d] dark:text-white placeholder:text-[#9e9d47] focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                            type="tel"
                                            value={formData.contactNumber}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </label>
                            </div>

                            <hr className="border-[#e9e8ce] dark:border-[#3a391a]" />

                            {/* Academic Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col gap-2">
                                    <span className="text-[#1c1c0d] dark:text-white text-sm font-semibold pl-1">Faculty</span>
                                    <div className="relative">
                                        <select
                                            name="faculty"
                                            value={formData.faculty}
                                            onChange={handleChange}
                                            className="w-full h-12 px-5 rounded-full bg-white dark:bg-[#1a1a0b] border border-[#e9e8ce] dark:border-[#3a391a] text-[#1c1c0d] dark:text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none appearance-none cursor-pointer transition-all"
                                        >
                                            <option>Faculty of Computing</option>
                                            <option>Faculty of Engineering</option>
                                            <option>Faculty of Business</option>
                                        </select>
                                        <span className="absolute right-5 top-1/2 -translate-y-1/2 material-symbols-outlined pointer-events-none text-[#9e9d47]">expand_more</span>
                                    </div>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-[#1c1c0d] dark:text-white text-sm font-semibold pl-1">Department</span>
                                    <div className="relative">
                                        <select
                                            name="department"
                                            value={formData.department}
                                            onChange={handleChange}
                                            className="w-full h-12 px-5 rounded-full bg-white dark:bg-[#1a1a0b] border border-[#e9e8ce] dark:border-[#3a391a] text-[#1c1c0d] dark:text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none appearance-none cursor-pointer transition-all"
                                        >
                                            <option>Software Engineering</option>
                                            <option>Computer Science</option>
                                            <option>Information Technology</option>
                                        </select>
                                        <span className="absolute right-5 top-1/2 -translate-y-1/2 material-symbols-outlined pointer-events-none text-[#9e9d47]">expand_more</span>
                                    </div>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-[#1c1c0d] dark:text-white text-sm font-semibold pl-1">Academic Year</span>
                                    <div className="relative">
                                        <select
                                            name="academicYear"
                                            value={formData.academicYear}
                                            onChange={handleChange}
                                            className="w-full h-12 px-5 rounded-full bg-white dark:bg-[#1a1a0b] border border-[#e9e8ce] dark:border-[#3a391a] text-[#1c1c0d] dark:text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none appearance-none cursor-pointer transition-all"
                                        >
                                            <option>Year 1</option>
                                            <option>Year 2</option>
                                            <option>Year 3</option>
                                            <option>Year 4</option>
                                        </select>
                                        <span className="absolute right-5 top-1/2 -translate-y-1/2 material-symbols-outlined pointer-events-none text-[#9e9d47]">expand_more</span>
                                    </div>
                                </label>
                            </div>

                            {/* Action Area */}
                            <div className="flex items-center justify-end pt-4">
                                <button className="bg-accent hover:bg-[#c04df9] focus:ring-4 focus:ring-accent/30 text-white font-bold text-base h-12 px-10 rounded-full shadow-lg shadow-accent/20 transition-all duration-200 flex items-center gap-2" type="submit">
                                    <span className="material-symbols-outlined text-[20px]">save</span>
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserProfile;