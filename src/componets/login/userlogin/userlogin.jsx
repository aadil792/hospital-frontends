import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, LogIn, User } from "lucide-react";

import "../userlogin/userlogin.css";
export default function UserLogin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const userData = { name, email, password };

    try {
      const res = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
      });

      if (res.ok) {
        navigate("/user_dashboard");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        alert("Invalid credentials");
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="back-button-container">
        <button className="back-button" onClick={handleBack}>
          <ArrowLeft className="icon" />
          Back
        </button>
      </div>

      <div className="form-wrapper">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <User className="icon" />
              Patient Login
            </h2>
            <p className="card-description">
              Enter your credentials to access your account
            </p>
          </div>
          <div className="card-content">
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                <LogIn className="icon" />
                {isSubmitting ? "Logging in..." : "Login"}
              </button>

              <div className="register-link">
                Don’t have an account? <a href="/register">Register Here!</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
