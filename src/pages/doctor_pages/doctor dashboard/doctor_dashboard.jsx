
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../doctor dashboard/doctor_dashboard.css";


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
      <h1>welcome {name} </h1>
      <button onClick={Logout}> logout</button>
      <Link to="/doctor_list">Appointments</Link>
    </>
  );
};

export default Doctor_dashboard;
