// admin login page

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../../pages/Admin_pages/adminLogin/admin_lp.css";
import "../userlogin/userlogin.css";
import Layout from "../../../componets/layout/layout";

const User_Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const back = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const useData = {
      name,
      email,
      password,
    };
    const res = await fetch("http://localhost:8000/user/login", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(useData),
      credentials: "include",
    });
    if (res.ok) {
      navigate("/user_dashboard");
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="admin-main-div">
        <nav>
          <button className="patient-back-button" onClick={back}>
            Back
          </button>
        </nav>
        <div className="user-form-div">
          <form onSubmit={handleSubmit}>
            <p className="p-admin">Patient Login</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="admin-input"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="admin-input"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="admin-input"
              required
            />
            <input className="admin-st-btn" type="submit" value="Login" />
            <div className="rs-div-l">
              <span className="rs-div-s">Do Not Have Account ?</span>
              <Link to="/register" className="rs-div-Link">
                {" "}
                Register Here !
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default User_Login;
