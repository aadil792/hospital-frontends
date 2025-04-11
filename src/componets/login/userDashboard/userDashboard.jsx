import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import "../userDashboard/userDashboard.css";
import { useEffect, useState } from "react";

const UserDashboard_page = () => {
  const Navigation = useNavigate();
  const [name, setName] = useState("");

  const handle = async () => {
    try {
      const res = await fetch("http://localhost:8000/user/logout", {
        method: "get",
        credentials: "include",
      });
      if (res.ok) {
        localStorage.removeItem("user");
        Navigation("/");
      } else {
        alert("logout failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <>
      <div className="dashboard-main-div">
        <nav className="nav-user-dash">
          <div className="div-mi-btn-logout">
            <button
              className="button-home-contain"
              id="u-dh-di"
              onClick={handle}
            >
              Logout
            </button>
          </div>
          <div className="dh-h1-welcome">
            <h1>welcome,{name}</h1>
          </div>
        </nav>
        <main>
          <div className="home-main-div">
            <Link
              className="buttoning-home-contain-user"
              to="/userAppointment_page"
            >
              Book Appointment
            </Link>
            <Link to="/userPrescrition" className="button-home-contain-user">
              {" "}
              View Prescription
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default UserDashboard_page;
