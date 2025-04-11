import { useState } from "react";
import Layout from "../../componets/layout/layout";
import { useNavigate } from "react-router-dom";
import "../doctor_pages/doctor_reg.css";
const Doctor_register_page = () => {
  const [doctorName, setDoctorName] = useState("");
  const [specializationDoctor, setSpecializationDoctor] = useState("");
  const [password, setPassword] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableTo, setAvailableTo] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConformpassword] = useState("");

  const navigation = useNavigate();

  const conformpasswordCheck = () => {
    if (password !== confirmPassword) {
      alert("password Incorrect");
      return false;
    }
    return true;
  };

  const back = () => {
    navigation("/");
  };

  const handle = async (e) => {
    e.preventDefault();
    if (!conformpasswordCheck()) return;

    const useData = {
      doctorName,
      specializationDoctor,
      password,
      availableFrom,
      availableTo,
      email,
    };

    try {
      const res = await fetch("http://localhost:8000/doctors/add", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(useData),
      });
      if (res.ok) {
        alert("Registeration Done");
        setDoctorName("");
        setEmail("");
        setAvailableFrom("");
        setAvailableTo("");
        setPassword("");
        setSpecializationDoctor("");
      }
    } catch (error) {
      alert(console.error(error));
      setDoctorName("");
      setEmail("");
      setAvailableFrom("");
      setAvailableTo("");
      setPassword("");
      setSpecializationDoctor("");
    }
  };

  return (
    <>
      {/* register-main */}
      <div className="doctor-main">
        <div className="doctor-form-main">
          <form onSubmit={handle}>
            <h3 className="h3-doctor-form">Doctor Register</h3>
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                id="name"
                className="input-placeholder-d"
                placeholder="Name"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                required
              />
            </label>

            <label htmlFor="password">
              <input
                type="password"
                name="password"
                id="password"
                className="input-placeholder-d"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <label htmlFor="confirm-password">
              <input
                type="password"
                name="confirmPassword"
                id="confirm-password"
                className="input-placeholder-d"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConformpassword(e.target.value)}
                required
              />
            </label>

            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                className="input-placeholder-d"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label htmlFor="speciality">
              <input
                type="text"
                name="speciality"
                id="speciality"
                className="input-placeholder-d"
                placeholder="Speciality In"
                value={specializationDoctor}
                onChange={(e) => setSpecializationDoctor(e.target.value)}
              />
            </label>

            <p className="sp-doct">Doctor Avaliable from </p>
            <label htmlFor="available">
              <input
                type="time"
                name="availableFrom"
                id="availableFrom"
                className="input-placeholder-a"
                value={availableFrom}
                onChange={(e) => setAvailableFrom(e.target.value)}
              />
            </label>
            <p className="sp-doct"> To </p>
            <label htmlFor="available">
              <input
                type="time"
                name="availableTo"
                id="availableTo"
                className="input-placeholder-a"
                placeholder="Available To"
                value={availableTo}
                onChange={(e) => setAvailableTo(e.target.value)}
              />
            </label>

            <div className="reg-back-btn">
              <button type="submit" className="register-form-main-button">
                Submit
              </button>
            </div>
            <div className="reg-back-btn">
              <button className="register-back-button" onClick={back}>
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
 
   </>
  );
};
export default Doctor_register_page;
