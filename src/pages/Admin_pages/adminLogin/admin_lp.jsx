import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LogIn, ShieldAlert, ArrowLeft } from "lucide-react"
import "../adminLogin/admin_lp.css";

export default function AdminLogin() {
  const [adminKey, setAdminKey] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()

  const handleBack = () => {
    navigate("/")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    if (adminKey !== "admin123") {
      setError("Invalid admin key")
      resetForm()
      return
    }

    const userData = {
      name,
      email,
      password,
    }

    try {
      const res = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
      })

      if (res.ok) {
        navigate("/admin_dashboard")
        resetForm()
      } else {
        setError("Invalid credentials")
        resetForm()
      }
    } catch (error) {
      console.error(error)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setAdminKey("")
    setName("")
    setEmail("")
    setPassword("")
    setIsSubmitting(false)
  }

  return (
    <div className="admin-login-container">
      <div className="back-button-wrapper">
        <button className="back-button" onClick={handleBack}>
          <ArrowLeft className="icon" />
          Back
        </button>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h2 className="admin-card-title">
            <ShieldAlert className="icon" />
            Admin Login
          </h2>
          <p className="admin-card-description">
            Enter your credentials to access the admin dashboard
          </p>
        </div>

        {error && <div className="admin-alert">{error}</div>}

        <form onSubmit={handleSubmit} className="admin-form">
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

          <div className="form-group">
            <label htmlFor="admin-key">Admin Key</label>
            <input
              id="admin-key"
              type="password"
              placeholder="Enter admin key"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              required
            />
            <p className="note">
              Forgot your Admin Key? Contact management for assistance.
            </p>
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            <LogIn className="icon" />
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          <div className="register-link">
            Don’t have an account? <a href="/register">Register</a>
          </div>
        </form>
      </div>
    </div>
  )
}
