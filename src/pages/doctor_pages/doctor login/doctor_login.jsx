import { useState } from "react";
import "../doctor login/doctor_login.css";
import { useNavigate, Link } from "react-router-dom";

const Doctor_login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigate();

  const back = () => {
    navigation("/");
    return true;
  };

  const Handle = async (e) => {
    e.preventDefault();
    const useData = {
      email,
      password,
      name,
    };
    try {
      const res = await fetch("http://localhost:8000/doctors/login", {
        method: "post",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(useData),
      });
      if (res.ok) {
        navigation("/doctor_dashboard");
      } else {
        alert("login failed");
        setEmail("");
        setPassword("");
        setName("");
      }
    } catch (error) {
      alert(console.error(error));
    }
  };

  return (
    <>
      <div className="admin-main-div">
        <div className="doctor-login-form-div">
          <form onSubmit={Handle}>
            <p className="p-admin">Doctor Login</p>
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
            <input
              className="input-btn-sub-doc"
              type="submit"
              onClick={back}
              value="back"
            />
            <div className="rs-div-l">
              <span className="rs-div-s"> Not Have Account ?</span>
              <Link to="/doctor_register" className="rs-div-Link"> Register Here !</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Doctor_login;
