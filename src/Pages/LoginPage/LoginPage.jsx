import React, { useState } from "react";
import "../../SCSS/LoginPage/LoginPage.scss";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const baseURL = import.meta.env.VITE_API_URL;
const API_URL = `${baseURL}/auth/login`; // change if needed

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => {
    setError("");
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (!form.username.trim() || !form.password.trim()) {
      setError("Please enter username and password.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username,
          password: form.password,
        }),
      });

      // If server returns non-JSON sometimes
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setError(data?.message || "Login failed. Check credentials.");
        return;
      }

      // Save token + user
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect
      navigate("/dashboard");
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="LoginPage">
      <div className="Col-left">
        <div className="logo">
          <img className="img" src="/logo1.png" alt="Logo" />
          <div className="title">
            <div className="title1">MPTS</div>
            <div className="title2">Member Performance Tracking System</div>
          </div>
        </div>

        <div>
          <h1 className="login-text">Login to Dashboard</h1>
          <h4 className="fill-text">Fill the below form to login</h4>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              className="input-username"
              type="text"
              name="username"
              value={form.username}
              onChange={onChange}
              placeholder="Username or Email"
              autoComplete="username"
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              className="input-password"
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <h4
            className="forget-password"
            onClick={() => navigate("/forgot-password")}
          >
            Forget Password?
          </h4>

          <button className="login-button" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

      <div className="Col-right">
        <div className="overlay">
          <h1>Member</h1>
          <h1>Performance</h1>
          <h1>Tracking</h1>
          <h1>System</h1>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
