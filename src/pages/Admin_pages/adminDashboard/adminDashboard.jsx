import { useNavigate } from "react-router-dom";
import "../adminDashboard/adminDashboard.css";
import { useEffect, useState } from "react";
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
  const onChanges = () => {
    navigation("/doctor_register");
  };
  const onChangese = () => {
    navigation( "/appointment-list");
  };

 

  return (
    <div className="dashboard-parernt-div">
      <div className="nav-bar-dashboard">
        <div className="welcome-db">
          <h1>Welcome ! {name} </h1>
        </div>

        <button className="btn-logout" onClick={onChange}>
          Logout
        </button>
        <button className="btn-logout" onClick={onChanges}>
          add Doctors
        </button>
        <button className="btn-logout" onClick={onChangese}>
          Appointment list 
        </button>
        
      </div>
   
    </div>
  );
};
export default AdminDashboardPage;
