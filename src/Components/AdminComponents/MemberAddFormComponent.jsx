import React, { useState } from 'react'
import "../../SCSS/componentStyle/AdminMemberForm.scss"
import "../../SCSS/AdminStyles/AdminViewAccount/AdminViewAccount.scss"

const MemberAddFormComponent = ({ onMemberAdded }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        gender: 'male',
        dob: '',
        department: '',
        batch: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate required fields
        if (!formData.name || !formData.email || !formData.contactNumber || !formData.dob || !formData.department || !formData.batch) {
            alert('Please fill in all fields');
            return;
        }

        // Call parent callback with form data
        if (onMemberAdded) {
            onMemberAdded(formData);
        }

        // Clear form
        setFormData({
            name: '',
            email: '',
            contactNumber: '',
            gender: 'male',
            dob: '',
            department: '',
            batch: ''
        });
    };

    return (
        <div className="member-add-form">
            <h2>Basic Information</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="memberName">Member Name:</label>
                <input 
                    type="text" 
                    id="memberName" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                />
                <br />
                <label htmlFor="contactNumber">Contact Number:</label>
                <input 
                    type="text" 
                    id="contactNumber" 
                    name="contactNumber" 
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required 
                />
            </form>

            <h2>Personal Details</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="gender">Gender:</label>
                <select 
                    id="gender" 
                    name="gender" 
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <label htmlFor="dob">Date of Birth:</label>
                <input 
                    type="date" 
                    id="dob" 
                    name="dob" 
                    value={formData.dob}
                    onChange={handleInputChange}
                    required 
                />
                <br />
                <label htmlFor="department">Department/Faculty:</label>
                <input 
                    type="text" 
                    id="department" 
                    name="department" 
                    value={formData.department}
                    onChange={handleInputChange}
                    required 
                />
                <br />
                <label htmlFor="batch">Batch:</label>
                <input 
                    type="text" 
                    id="batch" 
                    name="batch" 
                    value={formData.batch}
                    onChange={handleInputChange}
                    required 
                />
                <br />
            </form>

            <button type="submit" onClick={handleSubmit}>Create Account</button>
        </div>
    )
}

export default MemberAddFormComponent
