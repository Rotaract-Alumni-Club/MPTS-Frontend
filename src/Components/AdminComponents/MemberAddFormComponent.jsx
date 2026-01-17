import React, { useState } from "react";
import "../../SCSS/componentStyle/AdminMemberForm.scss";
import "../../SCSS/AdminStyles/AdminViewAccount/AdminViewAccount.scss";

const FACULTIES = [
  "Faculty of Engineering",
  "Faculty of Medicine",
  "Faculty of IT",
  "Faculty of Business",
  "Faculty of Architecture",
];

const BATCHES = ["21", "22", "23", "24", "25"];

const MemberAddFormComponent = ({ onMemberAdded }) => {
  const [formData, setFormData] = useState({
    indexNo: "",
    name: "",
    email: "",
    contactNO: "",
    gender: "male",
    dob: "",
    faculty: "",
    batch: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ basic validation
    const required = ["indexNo", "name", "email", "contactNO", "dob", "faculty", "batch"];
    for (const key of required) {
      if (!String(formData[key] || "").trim()) {
        setError("Please fill in all required fields.");
        return;
      }
    }

    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");

      // ✅ Send to backend (Admin creates user + email set-password link)
      const res = await fetch("http://localhost:5000/api/admin/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          indexNo: formData.indexNo,
          email: formData.email,      // Email = username
          name: formData.name,
          faculy: formData.faculty,   // IMPORTANT: your schema field is "faculy"
          batch: formData.batch,
          contactNO: formData.contactNO,
          experience: "",             // optional
          userRole: "Member",         // or "MEMBER" (keep consistent with your system)
          gender: formData.gender,    // not in schema (only send if schema has it)
          dob: formData.dob,          // not in schema (only send if schema has it)
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setError(data?.message || "Failed to create account.");
        return;
      }

      // ✅ Update local UI list (your parent page uses this)
      if (onMemberAdded) {
        onMemberAdded({
          name: formData.name,
          email: formData.email,
          contactNumber: formData.contactNO, // keep your UI naming
          gender: formData.gender,
          dob: formData.dob,
          department: formData.faculty,      // your UI uses department
          batch: formData.batch,
        });
      }

      // ✅ Clear form
      setFormData({
        indexNo: "",
        name: "",
        email: "",
        contactNO: "",
        gender: "male",
        dob: "",
        faculty: "",
        batch: "",
      });
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="member-add-form">
      <h2>Basic Information</h2>

      {/* ✅ ONE form only */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="indexNo">Index Number:</label>
        <input
          type="text"
          id="indexNo"
          name="indexNo"
          value={formData.indexNo}
          onChange={handleInputChange}
          placeholder="Ex: 225513L"
          required
        />

        <label htmlFor="memberName">Member Name:</label>
        <input
          type="text"
          id="memberName"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter member full name"
          required
        />

        <label htmlFor="email">Email (Username):</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="member@email.com"
          required
        />

        <label htmlFor="contactNO">Contact Number:</label>
        <input
          type="text"
          id="contactNO"
          name="contactNO"
          value={formData.contactNO}
          onChange={handleInputChange}
          placeholder="07X XXX XXXX"
          required
        />

        <h2>Personal Details</h2>

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

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          required
        />

        {/* ✅ Faculty dropdown */}
        <label htmlFor="faculty">Faculty:</label>
        <select
          id="faculty"
          name="faculty"
          value={formData.faculty}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Faculty</option>
          {FACULTIES.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>

        {/* ✅ Batch dropdown */}
        <label htmlFor="batch">Batch:</label>
        <select
          id="batch"
          name="batch"
          value={formData.batch}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Batch</option>
          {BATCHES.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Account"}
        </button>

        <p className="form-hint">
          A password setup link will be sent to the member’s email.
        </p>
      </form>
    </div>
  );
};

export default MemberAddFormComponent;
