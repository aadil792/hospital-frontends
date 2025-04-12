import { Link, useNavigate } from "react-router-dom";
import "../adminDashboard/adminDashboard.css";
import { useEffect, useState } from "react";

import logo from "../../../assets/main_logo.png";

const AdminDashboardPage = () => {
  const navigation = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/user/get-name", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not authorized");
        return res.json();
      })
      .then((data) => setName(data.name))
      .catch((err) => console.error("Failed to get name:", err));
  }, []);
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
    };
  }, []);
  const handle=()=>{
    navigation("/doctor_register")
  }
  const handles=()=>{
    navigation("/contact_list")
  }

  const onChange = async () => {
    try {
      await fetch("http://localhost:8000/user/logout", {
        method: "get",
        credentials: "include",
      });
      navigation("/admin_Login_page");
    } catch (err) {
      console.error("logout filed " + err);
    }
  };

  const onChangese = () => {
    navigation("/appointment-list");
  };

  return (
    <div className="dashboard-parernt-div">
      <div className="nav-bar-dashboard">
        <img className="admin-logo-im" src={logo}></img>
        <div className="welcome-db">
          <h1>Welcome to Admin Dashboard {name}!</h1>
        </div>
        <button className="btn-logout-admins" onClick={onChange}>
          Logout
        </button>
      </div>
      <div className="main-admin-db">
        <div className="cn-main-admin-list">
          <button className="appinmen-button-homes" onClick={onChangese}>
            Appointment list
          </button>
        </div>
        <div className="">
        <button className="appinmen-button-homes" onClick={handle}>
           doctor Register
          </button>
        </div>
        <div className="">
        <button className="appinmen-button-homes" onClick={handles}>
          Contact Review
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboardPage;
