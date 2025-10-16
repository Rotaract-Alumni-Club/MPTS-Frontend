import React, { useState, useEffect } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import axios from "axios";
import "../../SCSS/ChairStyle/AddCommitteeForm.scss";


const AddCommitteeForm = ({ projectId, onSuccess, onCancel }) => {
    const [formData, setFormData] = useState({
        committeeName: "",
        description: "",
    });

    const [allMembers, setAllMembers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredMembers, setFilteredMembers] = useState([]);
    const [selectedMembers, setSelectedMembers] = useState([]);

    useEffect(() => {
        fetchAllMembers();
    }, []);

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setFilteredMembers([]);
        } else {
            const filtered = allMembers.filter(
                (member) =>
                    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    member.email.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredMembers(filtered);
        }
    }, [searchQuery, allMembers]);

    const fetchAllMembers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/user/all");
            setAllMembers(response.data.data || []);
        } catch (error) {
            console.error("Error fetching members:", error);
            // Fallback dummy data for testing
            setAllMembers([
                { _id: "1", name: "Banula Silva", email: "banula@email.com" },
                { _id: "2", name: "Siyumi Perera", email: "siyumi@email.com" },
                { _id: "3", name: "Kamal Fernando", email: "kamal@email.com" },
                { _id: "4", name: "Nimal Jayasinghe", email: "nimal@email.com" },
            ]);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectMember = (member) => {
        if (!selectedMembers.find((m) => m._id === member._id)) {
            setSelectedMembers([...selectedMembers, member]);
        }
        setSearchQuery("");
        setFilteredMembers([]);
    };

    const handleRemoveMember = (memberId) => {
        setSelectedMembers(selectedMembers.filter((m) => m._id !== memberId));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const committeeData = {
                CName: formData.committeeName,
                Description: formData.description,
                ProjectId: projectId,
                Members: selectedMembers.map(member => ({
                    UserId: member._id,
                    UserName: member.name,
                    Role: "Member"
                }))
            };
console.log("Sending committee data:", committeeData); 

            const response = await axios.post(
                "http://localhost:5000/api/committee/add",
                committeeData
            );
            
            // Reset form
            setFormData({
                committeeName: "",
                description: "",
            });
            setSelectedMembers([]);
            
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error("Error adding committee:", error);
        }
    };

    return (
        <div className="add-committee-form-container">
            <form onSubmit={handleSubmit} className="add-committee-form">
                <div className="form-group">
                    <label>Committee Name</label>
                    <input
                        type="text"
                        name="committeeName"
                        value={formData.committeeName}
                        onChange={handleChange}
                        placeholder="Enter committee name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter committee description"
                        rows="4"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Search and Add Members</label>
                    <div className="search-input-wrapper">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search members by name or email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                            autoComplete="off"
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                className="clear-search"
                                onClick={() => setSearchQuery("")}
                            >
                                <FaTimes />
                            </button>
                        )}
                    </div>

                    {/* Search Results Dropdown */}
                    {filteredMembers.length > 0 && (
                        <div className="search-results">
                            {filteredMembers.map((member) => (
                                <div
                                    key={member._id}
                                    className="search-result-item"
                                    onClick={() => handleSelectMember(member)}
                                >
                                    <div className="member-info">
                                        <div className="member-avatar">
                                            {member.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div className="member-details">
                                            <div className="member-name">{member.name}</div>
                                            <div className="member-email">{member.email}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {searchQuery && filteredMembers.length === 0 && (
                        <div className="no-results">
                            No members found matching "{searchQuery}"
                        </div>
                    )}
                </div>

                {/* Selected Members */}
                {selectedMembers.length > 0 && (
                    <div className="selected-members-section">
                        <label>Selected Members ({selectedMembers.length})</label>
                        <div className="selected-members-list">
                            {selectedMembers.map((member) => (
                                <div key={member._id} className="selected-member-chip">
                                    <div className="member-avatar-small">
                                        {member.name.charAt(0).toUpperCase()}
                                    </div>
                                    <span className="member-name-small">{member.name}</span>
                                    <button
                                        type="button"
                                        className="remove-member-btn"
                                        onClick={() => handleRemoveMember(member._id)}
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="form-actions">
                    <button type="submit" className="btn-submit">
                        Add Committee
                    </button>
                    {onCancel && (
                        <button type="button" className="btn-cancel" onClick={onCancel}>
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default AddCommitteeForm;