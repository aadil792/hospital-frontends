// admin login page

import { useState } from "react";
import "../Admin_pages/admin_lp.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../componets/layout/layout";

const Admin_LP = () => {
  const [adminkey, setAdminkey] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
    });
    if (res.ok) {
      navigate("/");
      setName("");
      setAdminkey("");
      setEmail("");
      setPassword("");
    }
  };

  const handlechange = () => {
    if (adminkey === "admin123") {
      console.log("admin login successful");
    } else {
      alert("invalid admin key");
      console.log("invalid admin key");
      setName("");
      setAdminkey("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <Layout>
        <div className="admin-main-div">
          <div className="admin-form-div">
            <form onSubmit={handleSubmit}>
            <p className="p-admin"> Admin Login Here</p>
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
              <input
                type="password"
                className="admin-input"
                onChange={(e) => {
                  setAdminkey(e.target.value);
                }}
                value={adminkey}
                name="admin-key"
                placeholder="Admin Key"
                required
              />
              <p className="pt-admin">Forgot You are Admin Key ? Contact To Management</p>
              <input
                className="admin-st-btn"
                type="submit"
                onClick={handlechange}
                value="Submit"
              />
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Admin_LP;
