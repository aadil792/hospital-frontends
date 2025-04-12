import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, ArrowLeft, Stethoscope, AlertCircle } from "lucide-react";
import "../doctor login/doctor_login.css";

export default function DoctorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const userData = {
      email,
      password,
      doctorName,
    };

    try {
      const res = await fetch("http://localhost:8000/doctors/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        navigate("/doctor_dashboard");
      } else {
        setError("Login failed. Please check your credentials.");
        setEmail("");
        setPassword("");
        setDoctorName("");
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="doctor-login-container">
      <div className="doctor-login-card">
        <div className="doctor-login-header">
          <h2>
            <Stethoscope className="icon" />
            Doctor Login
          </h2>
          <p>Enter your credentials to access the doctor dashboard</p>
        </div>

        {error && (
          <div className="error-alert">
            <AlertCircle className="icon" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="doctor-login-form">
          <div>
            <label htmlFor="doctorName">Full Name</label>
            <input
              id="doctorName"
              type="text"
              placeholder="Enter your full name"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              required
            />
          </div>

          <div>
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

          <div>
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

          <div className="form-actions">
            <button type="submit" className="btn-login" disabled={isSubmitting}>
              <LogIn className="icon" />
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            <button type="button" className="btn-back" onClick={handleBack}>
              <ArrowLeft className="icon" />
              Back
            </button>
          </div>

          <p className="footer-note">
            Forgot your credentials? Contact Administration for assistance.
          </p>
        </form>
      </div>
    </div>
  );
}
