import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../doctor dashboard/doctor_dashboard.css";
import logo from "../../../assets/main_logo.png";
const Doctor_dashboard = () => {
  const [name, setName] = useState("");

  const navigation = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/doctors/get-name", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not authorized");
        return res.json();
      })
      .then((data) => setName(data.name))
      .catch((err) => console.error("Failed to get name:", err));
  }, []);

  const change = () => {
    navigation("/doctor_list");
  };
  const onchange = () => {
    navigation("/userAppointment_list");
  };

  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
    };
  }, []);

  const Logout = async () => {
    try {
      await fetch("http://localhost:8000/doctors/logout", {
        method: "get",
        credentials: "include",
      });
      navigation("/doctor_login");
    } catch (error) {
      alert(console.error(error));
    }
  };

  return (
    <>
      <div className="main-doctor-dashboard">
        <nav className="nav-bar-doctor-dash">
          <img className="db-logo-na" src={logo}></img>
          <div className="h1-db-d">
            <h3>Welcome , Dr {name}! </h3>
          </div>
          <button className="btn-doctor-logout" onClick={Logout}>
            logout
          </button>
        </nav>
        <div className="dashboard-main-doctor">
          <div className="userapp-btn">
            <button className="btn-userAppointment" onClick={onchange}>
              User Appointments
            </button>
            <button className="btn-general" onClick={change}>
              General Appointments
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctor_dashboard;
