// admin login page

import { useState } from "react";
import "../Admin_pages/admin_lp.css";
import { useNavigate } from "react-router-dom";

const Admin_LP = () => {
  const [adminkey, setAdminkey] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate();


  const handleSubmit= async(e)=>{

    e.preventDefault();

    const useData ={
        name,
        email,
        password,
    }
    const res = await fetch("http://localhost:8000/user/login", {
        method:"post",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(useData),
    });
    if(res.ok){
     navigate("/")
     setName("");
     setAdminkey("");
     setEmail("");
     setPassword("");
    }

    }



      const handlechange = () => {
        if (adminkey === "admin123") {
          console.log("admin login successful");
        } else {
            alert("invalid admin key")
          console.log("invalid admin key");
          setName("");
          setAdminkey("");
          setEmail("");
          setPassword("");
        }
      };


      return (
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="name" required />
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value) } placeholder="Email" />
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
              <input
                type="password"
                onChange={(e) => {
                 setAdminkey(e.target.value);
                }}
                value={adminkey}
                name="admin-key"
                placeholder="Admin Key"
              />
              <input type="submit"onClick={handlechange} value="submit" />
            </form>
          </div>
        </div>
      );
    };




  




export default Admin_LP;
