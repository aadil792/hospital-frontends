import { useState } from "react";
import "../login/login.css";
import { useNavigate } from "react-router-dom";

const Login_l = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const change = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    document
      .getElementById("section-1")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handlelogin = async (e) => {
    e.preventDefault();

    const useDate = {
      email,
      password,
    };

    try {
      const res = await fetch("http://localhost:8000/user/login", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials:"include",
        body: JSON.stringify(useDate),
      });
      if (res.ok) {
        navigate("/user_dashboard");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setName("");
        setEmail("");
        setPassword("");
        alert("incorrect mail and password");
      }
    } catch (error) {
      setName("");
      setEmail("");
      setPassword("");
      console.error(error);
    }
  };

  return (
    <>
      <div className="google-main" id="section-3">
        <div className="google-login-main">
          <form onSubmit={handlelogin}>
            <h3 className="h3-login-form">Login Here </h3>
            <label htmlFor="name" id="form-name">
              <input
                type="text"
                name="name"
                className="input-placeholder-login"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label htmlFor="password" id="form-name">
              <input
                type="password"
                name="name"
                className="input-placeholder-login"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <label htmlFor="email" id="form-name">
              <input
                type="email"
                name="name"
                className="input-placeholder-login"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <button>Submit </button>
            <button className="login-back-button" onClick={change}>
              Back
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login_l;
