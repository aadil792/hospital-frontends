import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home_p from "./pages/home.jsx";
import Membership from "./pages/membership.jsx";
import Login_l from "./componets/login/login.jsx";
import Create_Account from "./componets/account/create.jsx";
import Dashboard_page from "./pages/dashboard.jsx";
import About_page from "./pages/about.jsx";
import Contact_page from "./pages/contact.jsx";
import Department_page from "./pages/department.jsx";
import Doctor_availabilty from "./pages/doctor_availabilty.jsx";


const App = () => {
 

 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home_p />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/login" element={<Login_l/>} />
        <Route path="/create_account" element={<Create_Account />} />
        <Route path="/about" element={<About_page />} />
        <Route path="/contact" element={<Contact_page />} />
        <Route path="/department" element={<Department_page />} />
        <Route path="/doctor_availabilty" element={<Doctor_availabilty />} />
        <Route
          path="/dashboard"
          element={<Dashboard_page/>}
        />
      </Routes>
    </Router>
  );
};

export default App;
