import { useState } from "react";
import "../account/create.css";

const Create_Account = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [conformpassword, setConformpassword] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const back = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setPassword("");
    setConformpassword("");
    document
      .getElementById("section-1")
      ?.scrollIntoView({ behavior: "smooth" });
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
    <>
      <div className="membership-main" id="section-2">
        <div className="create-account-main">
          <div className="login-form-main">
            <form onSubmit={Handlesubmit}>
              <h3 className="h3-login-form">Join Membership Here</h3>

              <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-placeholder"
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
                  className="input-placeholder"
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
                  className="input-placeholder"
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
                  className="input-placeholder"
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
                  className="input-placeholder"
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
                  className="input-placeholder"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>

              <button type="submit" className="login-form-main-button">
                Submit
              </button>

              <button className="login-back-button" onClick={back}>
                Back
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create_Account;
