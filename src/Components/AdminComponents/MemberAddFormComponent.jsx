import React from 'react'
import "../../SCSS/componentStyle/AdminMemberForm.scss"

const MemberAddFormComponent = () => {
    return (
        <div className="member-add-form">
            <h2>Basic Information</h2>
            <form action="">
                <label htmlFor="memberName">Member Name:</label>
                <input type="text" id="memberName" name="memberName" required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="role">Contact Number:</label>
                <input type="text" id="contactNumber" name="contactNumber" required />
            </form>
            <h2>Personal Details</h2>
            <form action="">
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required />
                <br />
                <label htmlFor="Department">Department/Faculty:</label>
                <input type="text" id="department" name="department" required />
                <br />
                <label htmlFor="Batch">Batch:</label>
                <input type="text" id="batch" name="batch" required />
                <br />
                
                
            </form>
            <button type="submit">Create Account</button>   

        </div>
    )
}

export default MemberAddFormComponent
