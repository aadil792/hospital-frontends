import { useState } from "react";
import "../register/register.css";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../layout/layout";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [conformpassword, setConformpassword] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const navigation = useNavigate();

  const back = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setPassword("");
    setConformpassword("");
    navigation("/");
  };

  const Handlesubmit = async (e) => {
    e.preventDefault();
    if (password != conformpassword) {
      alert("incorrect password");
      return;
    }

    const useData = {
      name,
      password,
      address,
      email,
      phone,
    };
    try {
      const response = await fetch("http://localhost:8000/user/create", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(useData),
      });
      if (response.ok) {
        alert("User is registered Successfully !");
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setPassword("");
        setConformpassword("");
      } else {
        alert("error: " + (await response.text()));
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setPassword("");
        setConformpassword("");
      }
    } catch (error) {
      console.error(error);
      alert("something went wrong ");
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setPassword("");
      setConformpassword("");
    }
  };

  return (
  
      <div className="register-main">
        <div className="register-form-main">
          <form onSubmit={Handlesubmit}>
            <h3 className="h3-register-form"> Register</h3>
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                id="name"
                className="input-placeholder-r"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

            <label htmlFor="password">
              <input
                type="password"
                name="password"
                id="password"
                className="input-placeholder-r"
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
                className="input-placeholder-r"
                placeholder="Confirm Password"
                value={conformpassword}
                onChange={(e) => setConformpassword(e.target.value)}
                required
              />
            </label>

            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                className="input-placeholder-r"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label htmlFor="mobile">
              <input
                type="number"
                name="phone"
                id="mobile"
                className="input-placeholder-r"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>

            <label htmlFor="address">
              <input
                type="text"
                name="address"
                id="address"
                className="input-placeholder-r"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
  );
};
export default Register;
